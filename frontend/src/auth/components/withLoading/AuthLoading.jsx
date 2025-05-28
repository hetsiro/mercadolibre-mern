import LoadingThreeDotsPulse from "./PulseDots";
import { Modal } from "@mui/material"
import { useSelector } from "react-redux"
import { SnackAlert } from "../withStatus/SnackAlert";
import { AUTH_STATUS } from "../withStatus/authStatus";
import './AuthLoading.css';


export const AuthLoading = () => {

    const { status, error } = useSelector((state) => state.auth)
    const checking = status === AUTH_STATUS.CHECKING;

    return (
        <>
            <Modal
                open={checking}
                onClose={!checking}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <LoadingThreeDotsPulse />
            </Modal>
            { error && <SnackAlert />}
        </>
    )
}
