import { store, getDataFromApi } from "../../store/gists";
import GistsList from "./GistsList";

export default function Gists() {
    const { gists, loading, errorMessage } = store.getState();

    const getGists = () => {
        store.dispatch(getDataFromApi());
    }

    return (
        <div>
            <h4>Gists</h4>
            <input
                type="button"
                value='Получить gists'
                onClick={getGists}
            />
            {loading && <div>Идёт загрузка...</div>}
            {errorMessage && <div>{errorMessage}</div>}
            {gists.length > 0 && <GistsList gistsList={gists} />}
        </div>
    );
}