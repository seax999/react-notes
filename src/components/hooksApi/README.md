# useState 
创建一个变量用于当前函数组件内部的state使用。 
state 支持直接传递参数修改，也可以通过函数式修改。state 支持回调立刻获取当前的修改后的状态值 

useState 创建的变量同样可以实现类似 state 的重渲染作用，但是 useState 返回的修改函数无法立刻的在当前代码块获取修改后的值 

``` javascript
const [count, setCount] = useState(0);
useEffect(()=>{
    setCount(12);
    getCount()
})

const getCount = ()=>{
    console.log(count)
}

// 输出 count = 0
```
> 问题：当前状态需要依赖之前的状态进行计算时无法准确获取最新的值
> 对比：类组件当中可以通过函数式调用 setState 获取 state 和 props 进行修改；useState 可以通过函数式的方式获取当前状态的修改前的值，仅限当前状态 prevState  
> 解决方法：使用函数式的方式进行修改，可以获取当前状态的 prevstate
>``` javascript
> setCount(prevState => (prevState + 1)}
>```

> 问题：修改状态之后的函数调用无法直接获取更新后的值，需要异步调用之后才能获取。
> 对比：类组件当中可以通过 setState 的回调实现调用。函数式需要通过其他方式实现，例如固定在 ref 中  
> 解决方法：使用 ref 固定


# useEffect
> 执行时间：页面布局绘制之后执行，接收一个函数返回一个函数，接收的函数会在每次渲染更新时执行，返回的函数会在每次当前effect执行完毕之后执行，即销毁  
- 该函数每次执行都会捕获当前阶段的 props 和 state，所以有些时候做特别判断的时候可能获取不是最新的 state 或是 props，可以通过 ref 固定
- 该函数内的事件函数每次执行也都会有其自己的事件函数，即捕获执行时期的 state 和 props
- 依赖值数组如果不传，则默认每次更新都会执行，传递空数组则仅仅页面加载的时候执行，传递依赖值，仅当依赖值发生变化的时候才执行，使用不当有死循环的可能
- 
> 
> 每次执行都会捕获当前时期的 state 和 props 

# memo、useMemo、useCallback

memo 作用类似类组件当中的 PureComponent，每次会对 props 做浅比较，不同的是 memo 可以接收两个参数，一个参数为判断的函数，第二个参数不传递则默认浅比较 props，第二个参数传递则根据传递的参数判断是否为 true  

useMemo 缓存函数计算值，针对计算量较大且不经常变化的情况，可以对计算值进行缓存  
依赖项不传则默认每次渲染都计算，传递空数组则第一次计算，传递依赖数组  

useCallback 缓存函数，如果依赖项不发生变化引用地址则不变，针对函数名/函数地址作为依赖判断执行或是渲染等的情况，例如作为 useEffect 的依赖值或是子组件的 props 浅比较渲染优化  

# useImperativeHandle、React.forwardRef(Child)

``` javascript
// 子组件
useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

forwardRef(Child)

// 父组件
const Input = useRef(null)
<Child ref={Input} />

Input.current.focus() 
// 调用子组件自定义暴露给父组件的函数，每个 ref 只能用于一个子组件用来声明 ref 的属性
```