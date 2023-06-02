import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { searchTask, filterTask } from "../../features/todos/todoSlice";
import Search from "../../components/Search-bar/Search";
import AddModal from "../../components/modal/AddModal";
import TodosList from "../../components/todos/TodosList";
import Filter from "../../utils/filter/Filter";
import Notification from "../../utils/notification/Notification";
import NotFound from "../../components/NotFound/NotFound";
import "./main.scss";
import Free from "../../components/Free/Free";

const Main = () => {
  const dispatch = useAppDispatch();
  const [counts, setCounts] = useState<{
    activeTasksCount: number;
    searchResultsCount: number;
  }>({ activeTasksCount: 0, searchResultsCount: 0 });
  const [loading, setLoading] = useState<Boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [notifClassNames, setNotifClassNames] = useState<string>("show");
  const { filterOption } = useAppSelector((state) => state.todos.filterTask);
  const { SearchedTasks } = useAppSelector((state) => state.todos.searchTask);
  const allTasks = useAppSelector((state) => state.todos.tasks);
  //Filters active(uncompleted) tasks:
  const activeTasks = allTasks.filter((task) => !task.done);

  useEffect(() => {
    setCounts({
      activeTasksCount: activeTasks.length,
      searchResultsCount: SearchedTasks.length,
    });
  }, [activeTasks.length, SearchedTasks.length]);

  useEffect(() => {
    loading ? setNotifClassNames("hide") : setNotifClassNames("show");
  }, [loading]);

  // Renders spinner on search:
  useEffect(() => {
    setLoading(true);
    const spinnerTimeOut = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(spinnerTimeOut);
  }, [SearchedTasks]);

  // Search term is dispatched:
  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    dispatch(searchTask(searchTerm));
  };

  // Filter value("All", "Complete", "Active") is dispatched:
  const handleFilterChange = (value: string) => {
    dispatch(filterTask(value));
  };

  return (
    <div className="main">
      <div className="first-row">
        <Search handleSearch={handleSearch} loading={loading} />

        {/*Number of remaining tasks notification */}
        <div className={notifClassNames}>
          <Notification
            activeTasks={counts.activeTasksCount}
            searchedResults={searchTerm ? counts.searchResultsCount : null}
          />
        </div>

        {/* New task button and popup modal on click*/}
        <AddModal />
      </div>

      {/* Renders todo list */}
      <div className="todo-list">
        <TodosList filterOption={filterOption} />
      </div>

      {/* Renders free component when no active tasks remained: */}
      {counts.activeTasksCount === 0 && !searchTerm && <Free />}

      {/* If no tasks found by search query, NotFound component renders: */}
      {searchTerm && counts.searchResultsCount === 0 && <NotFound />}

      {/* Renders task filters*/}
      <div className="filter-tasks">
        <Filter handleClick={handleFilterChange} />
      </div>
    </div>
  );
};

export default Main;
