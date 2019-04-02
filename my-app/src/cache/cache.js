/*把搜索的结果保存下来*/
/*用export把方法暴露出来*/
/*定义存储搜索的key  _search_定义内部使用的key*/
const SEARCH_KEY='_search_'
const SEARCH_MAX_LENGTH=15
/*插入方法     arr存储的数据  val传入存储的值  compare前后比较的函数  maxlen存入的最大值*/
function insertArray(arr,val,compare,maxlen){
  //findIndex()函数也是查找目标元素，找到就返回元素的位置，找不到就返回-1。
  const index=arr.findIndex(compare)
  if(index===0){  //数据为数组中的第一个数据 不做任何操作
    return
  }
  if(index>0){  //数组中有这条数据并且不再第一个位置
    arr.splice(index,1)  //删掉这个数
  }
  arr.unshift(val);//把这条数据存储到数组中的第一个位置上
  if(maxlen && arr.length>maxlen){
    //如果有条数限制并且数组的个数大于限制数
    arr.pop() //方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值

  }
}
//开源storage的库，对localstorage和sessionstorage的封装
import storage from 'good-storage'
export function saveSearch(query){
  let searches=storage.get(SEARCH_KEY,[])
  /*逻辑是最后一次搜索的结果放到搜索历史的第一个*/
  insertArray(searches,query,(item)=>{
    return item===query //这是传入的一个比较函数 说明query在这个数组中
  },SEARCH_MAX_LENGTH)
  storage.set(SEARCH_KEY,searches)
  return searches
}
