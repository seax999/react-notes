#  map 对象可以保存键值对且记住插入的顺序，任何值（对象或是基本数据类型）都可以作为键或是值

> ### Function
> new Map() 创建一个 map 数据结构
> > const map_info = new Map([['key1', 'value1']])  
> > 默认匹配键值对为 key1 => value1  
> 
> new Map().size
> > 获取对应 map 数据的长度  
> 
> Map.prototype.delete(key)
> > 删除 map 数据中的对应键值对，成功返回 true 否则返回 false  
> 
> Map.prototype.get(key)    
> > map_info.get('key1') ==> value1/undefined  
> 
> Map.prototype.has(key)  
> > return true/false  
> 
> Map.prototype.set(key, value)  
> > return 插入后的 map 数据  
> 
> Map.prototype.keys()  
> > return 对应数据的 key 组成的hashmap的数据集合，可以转成数组使用，例如 Array.from(map_info.keys()) / [...map_info.keys()]  
> 
> Map.prototype.values()
> > return 对应数据的 value 组成的hashmap的数据集合，可以转成数组使用，例如 Array.from(map_info.values()) / [...map_info.values()]
> 
> Map.prototype.forEach(callbackFn[key, index])
> 

和 Object 的对比差异  
+ map 可以使用foreach迭代，Object 不支持迭代，但是可以用 for..of..迭代
+ map 不支持序列化，Object 支持序列化
+ 。。
+ 总的来说，map 数据一般场景下使用优于 Object