import React from 'react'
import { useRecoilState } from 'recoil';
import { todoListState } from '../todoAtom';

const TodoList = ({item})=> {
    const [todoList,setTodoList] = useRecoilState(todoListState);

    const index = todoList.findIndex((listItem)=> listItem === item );


    const editorItemText = ({target: {value}}) => {
        const newList = replaceItemAtIndex(todoList, index,{
            ...item,
            text:value
        })
        setTodoList(newList);
    }

    return (
    <div>
      <input type='text' value={item.text} onChange={editorItemText}/>
    </div>
  )
}

export default TodoList;

function replaceItemAtIndex(arr, index, newValue){
    return [...arr.slice(0,index), newValue, ...arr.slice(index+1)]
}


// replaceItemAtIndex 인덱스 값이 반환 될떄 내용이 들어갈떄
//replaceItemeAtIndex 넣어주면 된다.
// 자바스크립트에서도 쓰이긴함.
// 


// findIndex : 주어진 판별 함수를 만족하는 배열의 첫번쨰 요소에 대한 인덱스를 반환함. ( 만족요소가 없으면 -1 반환)

// const arry1 =[5,12,10,130,44];
// const isNumer = (element) => element > 13;
// console.log(aar1.findIndex(isNumer));

// 수정하려고 할떄 평소에 쓰는거처럼 만약에 메모장에 추가하는거 생성한거를 수정하는거
// 메모장이면 끝나면 다 달성하면 메모 해둔거를 삭제하는 기능도 있어야한다.
// 오늘 끝낸일이있거나 그러면 완료하는일 특정 일에 대해서 해야할일 일정 그런거 나눠서 분류하거나
// 분류한거를 필터링 하거나 그런거 있으면 좋다.
// 일단 해당 기능 삭제하기

// recoil 이용해서 그런것들 할건데 state이용해서 하면 좋을거 같다
// redux 부분도 똑같이 상태 관리하는거 그런거 어떠한 차이점이 있는지 정리해보면 좋을거 같다.
// 오늘 해본 개념들 그런것들 정리해보면 좋을거같다.
// 혹시 하면서 추가로 듣고 싶은 부분들 하면 좋을거같다.
// recoil 부분이든 헷갈리는거 그런거 진도 떄문에 빨리 나가다 보니까 설명을 다 못하는것도 있으니
// 블로그 만든것도 완성된거까지 올려주면 좋을거같다.
// 궁금한 내용이나 그런거 올려주면 될거같다.