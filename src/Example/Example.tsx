import { Provider, useDispatch, useSelector } from 'react-redux';
import { setName } from './ExampleSlice';
import store from './store';

export default () => {
    return (
        <Provider store={store}>
            <Level0 />
            <Display />
        </Provider>
    );
};



const Display = () => {
    const name = useSelector((state: any) => state.example.name);

    return <div>{name}</div>;
};

const Level0 = () => {
    return <>
        <div>before level 1</div>
        <Level1 />
        <div>after level 1</div>
    </>;
};

const Level1 = () => {
    
    return <>
        <div>before level 2</div>
        <Level2 />
    </>;
};

const Level2 = () => {
    return <Level3 />;
};

const Level3 = () => {
    const dispatch = useDispatch();
    const name = useSelector((state: any) => state.example.name);

    const handleOnChange = (e: any) => {
        dispatch(setName(e.target.value));
    };

    return <>
        <input value={name} onChange={handleOnChange} />;
    </>

};