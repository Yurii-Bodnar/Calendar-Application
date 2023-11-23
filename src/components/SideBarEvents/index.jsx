import { useDispatch, useSelector } from "react-redux";
import EventsList from "../EventsList";
import {
  selectDate,
  selectIsModalOpen,
  selectIsUpdateModalOpen,
} from "../../redux/events/eventsSelectors";
import { dateConvert } from "../../utility/dateConvert";
import { modalOpen } from "../../redux/events/eventsSlice";
import ModalFormAddEvents from "../ModalFormAddEvents";
import UpdateFormEvent from "../UpdateFormEvent";

const SideBarEvents = () => {
  const date = useSelector(selectDate);
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);
  const isUpdateModalOpen = useSelector(selectIsUpdateModalOpen);

  const handleClick = () => {
    dispatch(modalOpen());
  };

  return (
    <section>
      <div>
        <h2>Events for {dateConvert(date)}</h2>
        <div>
          <button type="button" onClick={handleClick}>
            Add event
          </button>
        </div>
      </div>
      <EventsList />
      {isModalOpen && <ModalFormAddEvents />}
      {isUpdateModalOpen && <UpdateFormEvent />}
    </section>
  );
};

export default SideBarEvents;
