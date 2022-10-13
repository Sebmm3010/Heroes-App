import { useEffect } from "react";
import Swal from "sweetalert2";

export const alert = (state, payload={}) => {
    if (state) {
        useEffect(() => {
            Swal.fire(payload);
        }, []);
    }
}
