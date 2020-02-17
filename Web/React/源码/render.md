##### react主要两个流程：
    
    初始化：render、hydrate
    更新：setState、replaceUpdate、forceUpdate
    
  render和hydrate都会调用同一个方法
  
  流程：
    1、legacyRenderSubtreeIntoContainer() ==> 创建ReactRoot、FiberRoot
    2、updateContainer返回updateContainerAtExpirationTime
    3、
  
        hydrate: function (element, container, callback) {
            !isValidContainer(container) ? invariant(false, 'Target container is not a DOM element.') : void 0;
            {
              !!container._reactHasBeenPassedToCreateRootDEV ? warningWithoutStack$1(false, 'You are calling ReactDOM.hydrate() on a container that was previously ' + 'passed to ReactDOM.%s(). This is not supported. ' + 'Did you mean to call createRoot(container, {hydrate: true}).render(element)?', enableStableConcurrentModeAPIs ? 'createRoot' : 'unstable_createRoot') : void 0;
            }
            // TODO: throw or warn if we couldn't hydrate?
            return legacyRenderSubtreeIntoContainer(null, element, container, true, callback);
          },
          render: function (element, container, callback) {
            !isValidContainer(container) ? invariant(false, 'Target container is not a DOM element.') : void 0;
            {
              !!container._reactHasBeenPassedToCreateRootDEV ? warningWithoutStack$1(false, 'You are calling ReactDOM.render() on a container that was previously ' + 'passed to ReactDOM.%s(). This is not supported. ' + 'Did you mean to call root.render(element)?', enableStableConcurrentModeAPIs ? 'createRoot' : 'unstable_createRoot') : void 0;
            }
            return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
          },
        
        legacyRenderSubtreeIntoContainer(parsentComponent、children、container、forceHydrate、callback)
                    parsentComponent：初次渲染时为null
                    children：数组
                    container：更新时为null
                    forceUpdate：区分render和hydrate
                    callback：回调函数
        代码如下
        function legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
          {
            topLevelUpdateWarnings(container);
          }
        
          // TODO: Without `any` type, Flow says "Property cannot be accessed on any
          // member of intersection type." Whyyyyyy.
          var root = container._reactRootContainer;
          //首次渲染
          if (!root) {
            // Initial mount
            //创建ReactRoot和FiberRoot
            root = container._reactRootContainer = legacyCreateRootFromDOMContainer(container, forceHydrate);
            if (typeof callback === 'function') {
              var originalCallback = callback;
              callback = function () {
                var instance = getPublicRootInstance(root._internalRoot);
                originalCallback.call(instance);
              };
            }
            // Initial mount should not be batched.
            //batchedUpdate：批处理机制：setState、forceUpdate、replaceState
             //初次渲染
            unbatchedUpdates(function () {
              if (parentComponent != null) {
                //组件装载时
                root.legacy_renderSubtreeIntoContainer(parentComponent, children, callback);
              } else {
                //组件初次渲染时
                root.render(children, callback);
              }
            });
          } else {
            if (typeof callback === 'function') {
              var _originalCallback = callback;
              callback = function () {
                var instance = getPublicRootInstance(root._internalRoot);
                _originalCallback.call(instance);
              };
            }
            // Update
            //更新时
            if (parentComponent != null) {
              root.legacy_renderSubtreeIntoContainer(parentComponent, children, callback);
            } else {
              root.render(children, callback);
            }
          }
          return getPublicRootInstance(root._internalRoot);
        }
        
创建ReactRoot和FiberRoot
   
            创建
                function legacyCreateRootFromDOMContainer(container, forceHydrate) {
                  var shouldHydrate = forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
                  // First clear any existing content.
                  //首次渲染时判断是否是Hydrate
                  if (!shouldHydrate) {
                    var warned = false;
                    var rootSibling = void 0;
                    while (rootSibling = container.lastChild) {
                      {
                        if (!warned && rootSibling.nodeType === ELEMENT_NODE && rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)) {
                          warned = true;
                          warningWithoutStack$1(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.');
                        }
                      }
                      //若不是hydrate，则移除dom节点下的所有子节点
                      container.removeChild(rootSibling);
                    }
                  }
                  {
                    if (shouldHydrate && !forceHydrate && !warnedAboutHydrateAPI) {
                      warnedAboutHydrateAPI = true;
                      lowPriorityWarning$1(false, 'render(): Calling ReactDOM.render() to hydrate server-rendered markup ' + 'will stop working in React v17. Replace the ReactDOM.render() call ' + 'with ReactDOM.hydrate() if you want React to attach to the server HTML.');
                    }
                  }
                  // Legacy roots are not async by default.
                  var isConcurrent = false;
                  //返回一个ReactRoot对象
                  return new ReactRoot(container, isConcurrent, shouldHydrate);
                }
       
 step 1、创建ReactRoot，生成FiberRoot
 
                function ReactRoot(container, isConcurrent, hydrate) {
                  var root = createContainer(container, isConcurrent, hydrate);
                  this._internalRoot = root;
                }
                ReactRoot.prototype.render = function (children, callback) {
                  var root = this._internalRoot;
                  var work = new ReactWork();
                  callback = callback === undefined ? null : callback;
                  {
                    warnOnInvalidCallback(callback, 'render');
                  }
                  if (callback !== null) {
                    work.then(callback);
                  }
                  updateContainer(children, root, null, work._onCommit);
                  return work;
                };
                ReactRoot.prototype.unmount = function (callback) {
                  var root = this._internalRoot;
                  var work = new ReactWork();
                  callback = callback === undefined ? null : callback;
                  {
                    warnOnInvalidCallback(callback, 'render');
                  }
                  if (callback !== null) {
                    work.then(callback);
                  }
                  updateContainer(null, root, null, work._onCommit);
                  return work;
                };
                ReactRoot.prototype.legacy_renderSubtreeIntoContainer = function (parentComponent, children, callback) {
                  var root = this._internalRoot;
                  var work = new ReactWork();
                  callback = callback === undefined ? null : callback;
                  {
                    warnOnInvalidCallback(callback, 'render');
                  }
                  if (callback !== null) {
                    work.then(callback);
                  }
                  updateContainer(children, root, parentComponent, work._onCommit);
                  return work;
                };
                ReactRoot.prototype.createBatch = function () {
                  var batch = new ReactBatch(this);
                  var expirationTime = batch._expirationTime;
                
                  var internalRoot = this._internalRoot;
                  var firstBatch = internalRoot.firstBatch;
                  if (firstBatch === null) {
                    internalRoot.firstBatch = batch;
                    batch._next = null;
                  } else {
                    // Insert sorted by expiration time then insertion order
                    var insertAfter = null;
                    var insertBefore = firstBatch;
                    while (insertBefore !== null && insertBefore._expirationTime >= expirationTime) {
                      insertAfter = insertBefore;
                      insertBefore = insertBefore._next;
                    }
                    batch._next = insertBefore;
                    if (insertAfter !== null) {
                      insertAfter._next = batch;
                    }
                  }
                
                  return batch;
                };
          
创建FiberRoot               
                
                function createContainer(containerInfo, isConcurrent, hydrate) {
                  return createFiberRoot(containerInfo, isConcurrent, hydrate);
                }
                function createFiberRoot(containerInfo, isConcurrent, hydrate) {
                  // Cyclic construction. This cheats the type system right now because
                  // stateNode is any.
                  var uninitializedFiber = createHostRootFiber(isConcurrent);
                
                  var root = void 0;
                  //enableSchedulerTracing是个全局变量，默认为true
                  if (enableSchedulerTracing) {
                    root = {
                      //当前应用的Fiber对象
                      current: uninitializedFiber,
                      //root节点，render方法接收的第二个参数
                      containerInfo: containerInfo,
                      pendingChildren: null,
                
                      earliestPendingTime: NoWork,
                      latestPendingTime: NoWork,
                      earliestSuspendedTime: NoWork,
                      latestSuspendedTime: NoWork,
                      latestPingedTime: NoWork,
                
                      pingCache: null,
                
                      didError: false,
                
                      pendingCommitExpirationTime: NoWork,
                      finishedWork: null,
                      timeoutHandle: noTimeout,
                      context: null,
                      pendingContext: null,
                      // 用来确定第一次渲染的时候是否需要融合
                      hydrate: hydrate,
                      // 当前root上剩余的过期时间
                      // TODO: 提到renderer里面区处理
                      nextExpirationTimeToWorkOn: NoWork,
                      // 当前更新对应的过期时间
                      expirationTime: NoWork,
                      firstBatch: null,
                      // root之间关联的链表结构
                      nextScheduledRoot: null,
                
                      interactionThreadID: tracing.unstable_getThreadID(),
                      memoizedInteractions: new Set(),
                      pendingInteractionMap: new Map()
                    };
                  } else {
                    root = {
                      current: uninitializedFiber,
                      containerInfo: containerInfo,
                      pendingChildren: null,
                
                      pingCache: null,
                
                      earliestPendingTime: NoWork,
                      latestPendingTime: NoWork,
                      earliestSuspendedTime: NoWork,
                      latestSuspendedTime: NoWork,
                      latestPingedTime: NoWork,
                
                      didError: false,
                
                      pendingCommitExpirationTime: NoWork,
                      finishedWork: null,
                      timeoutHandle: noTimeout,
                      context: null,
                      pendingContext: null,
                      hydrate: hydrate,
                      nextExpirationTimeToWorkOn: NoWork,
                      expirationTime: NoWork,
                      firstBatch: null,
                      nextScheduledRoot: null
                    };
                  }
                
                  uninitializedFiber.stateNode = root;
                
                  // The reason for the way the Flow types are structured in this file,
                  // Is to avoid needing :any casts everywhere interaction tracing fields are used.
                  // Unfortunately that requires an :any cast for non-interaction tracing capable builds.
                  // $FlowFixMe Remove this :any cast and replace it with something better.
                  return root;
                }
                
step 2、updateContainer

updateContainer

    updateContainer
        element：子节点
        container：FiberRoot,createContainer => createFiberRoot => FiberRoot
        parsentComponent：父组件，在初次渲染时为null，更新时为组件
        callback：回调函数

    function updateContainer(element, container, parentComponent, callback) {
      var current$$1 = container.current;
      var currentTime = requestCurrentTime();
      //获取当前时间
      var expirationTime = computeExpirationForFiber(currentTime, current$$1);
      //计算节点过期时间 currentTime、5000和250  ((((currentTime - 2 + 5000 / 10) / 25) | 0) + 1) * 25
      return updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, callback);
    }   
               
 updateContainerAtExpirationTime
 
    element：子节点
    container：FiberRoot
    parsentComponent：父组件
    expirationTime：当前过期时间
    callback：回调函数
 
    function updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, callback) {
      // TODO: If this is a nested container, this won't be the root.
      var current$$1 = container.current;
    
      {
        if (ReactFiberInstrumentation_1.debugTool) {
          if (current$$1.alternate === null) {
            ReactFiberInstrumentation_1.debugTool.onMountContainer(container);
          } else if (element === null) {
            ReactFiberInstrumentation_1.debugTool.onUnmountContainer(container);
          } else {
            ReactFiberInstrumentation_1.debugTool.onUpdateContainer(container);
          }
        }
      }
    
      var context = getContextForSubtree(parentComponent);
      if (container.context === null) {
        container.context = context;
      } else {
        container.pendingContext = context;
      }
    
      //将该节点加入调度队列
      return scheduleRootUpdate(current$$1, element, expirationTime, callback);
    }  
    
    function scheduleRootUpdate(current$$1, element, expirationTime, callback) {
      {
        if (phase === 'render' && current !== null && !didWarnAboutNestedUpdates) {
          didWarnAboutNestedUpdates = true;
          warningWithoutStack$1(false, 'Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\n\n' + 'Check the render method of %s.', getComponentName(current.type) || 'Unknown');
        }
      }
    
      var update = createUpdate(expirationTime);
      // Caution: React DevTools currently depends on this property
      // being called "element".
      update.payload = { element: element };
    
      callback = callback === undefined ? null : callback;
      if (callback !== null) {
        !(typeof callback === 'function') ? warningWithoutStack$1(false, 'render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback) : void 0;
        update.callback = callback;
      }
    
      flushPassiveEffects();
      //将更新加入到队列
      enqueueUpdate(current$$1, update);
      //开始调度更新
      scheduleWork(current$$1, expirationTime);
    
      return expirationTime;
    }       
    
    总体执行流程如下
        render(){
            legacyRenderSubtreeIntoContainer();
        }     
        legacyRenderSubtreeIntoContainer(){
            //创建ReactRoot、FiberRoot
            root = container.__reactRootContainer = legacyCreateRootFromDOMContainer();
            //执行渲染
            root.render()/root.legacy_RenderSubtreeIntoContainer();
        }
        root.render()/root.legacy_RenderSubtreeIntoContainer(){
            updateContainer();
        }
        updateContainer(){
            //container：dom
            var current$$1 = container.current;
            //currentTime：当前时间
            var currentTime = requestCurrentTime();
            //计算过期时间
            var expirationTime = computeExpirationForFiber(currentTime,current$$);
            //element: 子节点， container：FiberRoot parsentComponent：父组件 expirationTime： 过期时间 callback：回调函数
            updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, callback);
        }
        updateContainerAtExpirationTime(){
            //container.current：当前组件的Fiber
            var current$$1 = container.current;
            //element：子组件
            scheduleRootUpdate(current$$1, element, expirationTime, callback);
        }
        scheduleRootUpdate(){
            var update = createUpdate(expirationTime);
              // Caution: React DevTools currently depends on this property
              // being called "element".
              update.payload = { element: element };
              //调度队列
              enqueueUpdate(current$$1, update);
              //进入调度流程
              scheduleWork(current$$1, expirationTime);
              
              return expirationTime;
        }
        
##### FiberRoot

    FiberRoot.current = Fiber
    FiberRoot.nextScheduledRoot = FiberRoot
   
##### Fiber(React16 核心)

    更新之后，将属性放在this上
    ReactElement（不是每个dom）都会对应一个Fiber对象
    记录节点的各种状态
    串联整个应用形成树结构（存第一个子节点，若有子节点，则往子节点遍历，若无子节点，看兄弟节点，若都没有，则返回父节点）
    
    type Fiber = {|
      // 标记不同的组件类型
      tag: WorkTag,
    
      // ReactElement里面的key
      key: null | string,
    
      // ReactElement.type，也就是我们调用`createElement`的第一个参数
      elementType: any,
    
      // The resolved function/class/ associated with this fiber.
      // 异步组件resolved之后返回的内容，一般是`function`或者`class`
      type: any,
    
      // The local state associated with this fiber.
      // 跟当前Fiber相关本地状态（比如浏览器环境就是DOM节点）
      stateNode: any,
    
      // 指向他在Fiber节点树中的`parent`，用来在处理完这个节点之后向上返回
      return: Fiber | null,
    
      // 单链表树结构
      // 指向自己的第一个子节点
      child: Fiber | null,
      // 指向自己的兄弟结构
      // 兄弟节点的return指向同一个父节点
      sibling: Fiber | null,
      index: number,
    
      // ref属性
      ref: null | (((handle: mixed) => void) & {_stringRef: ?string}) | RefObject,
    
      // 新的变动带来的新的props
      pendingProps: any, 
      // 上一次渲染完成之后的props
      memoizedProps: any,
    
      // 该Fiber对应的组件产生的Update会存放在这个队列里面
      updateQueue: UpdateQueue<any> | null,
    
      // 上一次渲染的时候的state，通过updateQueue计算出来的
      memoizedState: any,
    
      // 一个列表，存放这个Fiber依赖的context
      firstContextDependency: ContextDependency<mixed> | null,
    
      // 用来描述当前Fiber和他子树的`Bitfield`
      // 共存的模式表示这个子树是否默认是异步渲染的
      // Fiber被创建的时候他会继承父Fiber
      // 其他的标识也可以在创建的时候被设置
      // 但是在创建之后不应该再被修改，特别是他的子Fiber创建之前
      mode: TypeOfMode,
    
      // Effect
      // 用来记录Side Effect
      effectTag: SideEffectTag,
    
      // 单链表用来快速查找下一个side effect
      nextEffect: Fiber | null,
    
      // 子树中第一个side effect
      firstEffect: Fiber | null,
      // 子树中最后一个side effect
      lastEffect: Fiber | null,
    
      // 代表任务在未来的哪个时间点应该被完成
      // 不包括他的子树产生的任务
      expirationTime: ExpirationTime,
    
      // 快速确定子树中是否有不在等待的变化
      childExpirationTime: ExpirationTime,
    
      // 在Fiber树更新的过程中，每个Fiber都会有一个跟其对应的Fiber
      // 我们称他为`current <==> workInProgress`
      // 在渲染完成之后他们会交换位置
      alternate: Fiber | null,
    
      // 下面是调试相关的，收集每个Fiber和子树渲染时间的
    
      actualDuration?: number,
    
      // If the Fiber is currently active in the "render" phase,
      // This marks the time at which the work began.
      // This field is only set when the enableProfilerTimer flag is enabled.
      actualStartTime?: number,
    
      // Duration of the most recent render time for this Fiber.
      // This value is not updated when we bailout for memoization purposes.
      // This field is only set when the enableProfilerTimer flag is enabled.
      selfBaseDuration?: number,
    
      // Sum of base times for all descedents of this Fiber.
      // This value bubbles up during the "complete" phase.
      // This field is only set when the enableProfilerTimer flag is enabled.
      treeBaseDuration?: number,
    
      // Conceptual aliases
      // workInProgress : Fiber ->  alternate The alternate used for reuse happens
      // to be the same as work in progress.
      // __DEV__ only
      _debugID?: number,
      _debugSource?: Source | null,
      _debugOwner?: Fiber | null,
      _debugIsCurrentlyTiming?: boolean,
    |};
    
    