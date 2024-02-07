import {icons} from "../UI/icons";


export const Toolbar = ({saveCodeToDb}) => {
    return (
        <div className="absolute bottom-0 h-10 w-full rounded-t-lg bg-gray-600 opacity-50 hover:opacity-100">
            <div className="flex columns-3 gap-6 place-content-evenly pl-5 pr-5">
                <button className="flex-none">
                    {icons.javascript}
                </button>
                <button className="flex-none">
                    {icons.runCode}
                </button>
                <button className="flex-none" onClick={saveCodeToDb}>
                    {icons.saveCode}
                </button>
            </div>
        </div>
    );
}