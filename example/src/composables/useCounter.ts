import { onMounted, ref, watch } from "vue";
export default function useCounter() {
    // console.log(props.msg);
    const counter = ref(0);
    watch(counter, (newValue, oldValue) => {
        console.log(`counter: ${newValue} <= ${oldValue}`);
    });
    // console.log(counter.value);
    const handleClick = function () {
        counter.value++;
    };
    // on+生命周期
    onMounted(handleClick);
    return {
        counter,
        handleClick,
    };
}