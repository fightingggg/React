import { atom } from 'recoil';

export const todoListState = atom({
    key:'todoListState',
    default :[]
});

// // useRecoilState - useState 비슷 atom, selector 넣어줌
// useRecoilValue  // - state 상태 값만을 참조하기 위해 사용
// useSetRecoilState // - setter 함수만 사용 , 선언된 함수 변수에 할당 사용, 설정되어있는뜻으로 안에서 쓰고 있는 함수라고 생각하면 될거같다.
// useResetRecoilState // default 리셋 하기 위해 사용 됨. 선언된 함수 변수에 할당해 사용