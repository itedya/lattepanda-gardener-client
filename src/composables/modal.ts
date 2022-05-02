import {ref} from "vue";
import useEventBus from "./mitt";
import {v4 as uuidv4} from 'uuid';

const useModal = (modal: HTMLDivElement, identifier: string, closeOnOutsideClick: boolean = true) => {
    const eventBus = useEventBus();
    const open = ref(false);
    const id = ref(uuidv4());

    const openModal = () => {
        modal.style.display = "flex";
        eventBus.emit(`${identifier}:modal:show-callback`);
        open.value = true;
    }

    const closeModal = () => {
        modal.style.display = "none";
        eventBus.emit(`${identifier}:modal:close-callback`);
        open.value = false;
    }

    if (closeOnOutsideClick) {
        modal.addEventListener("click", (e) => {
            const {target} = e;

            if (!(target instanceof HTMLElement)) return;
            if (!target.classList.contains("modal")) return;
            if (!target.classList.contains(`modal-identifier-${id.value}`)) return;

            closeModal();
        });
    }

    modal.classList.add(`modal-identifier-${id.value}`);
    closeModal();

    return {open, openModal, closeModal, id};
}

export default useModal;
