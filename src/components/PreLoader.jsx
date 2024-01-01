import { SyncLoader } from "react-spinners";

export default function PreLoader({ loading }) {
    const CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    };
    return (
        <SyncLoader
            color={'#000000'}
            loading={loading}
            cssOverride={CSSProperties}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader" />
    )
}