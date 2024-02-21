// @scripts
import AppContext from "./AppContext";
import { LocalStorageTaskRepositoryFactory } from "./modules/tasks/infrastructure/LocalStorageTaskRepositoryFactory";
import { APITaskRepositoryFactory } from './modules/tasks/infrastructure/APITaskRepositoryFactory';
import Todo from "./pages/Todo";

const App = () => {
    const repository = LocalStorageTaskRepositoryFactory.execute();
    return (
        <AppContext repository={repository}>
            <Todo />
        </AppContext>
    );
};

export default App;
