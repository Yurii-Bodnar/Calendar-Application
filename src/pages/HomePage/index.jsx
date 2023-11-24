import Calendar from "../../components/Calendar";
import SideBarEvents from "../../components/SideBarEvents";
import { Header, Logo, Title, Link, Container } from "./HomePage.styled";
import logo from "../../icons/sprite.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/events/eventsSlice";
import ModalFormAddEvents from "../../components/ModalFormAddEvents";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Header>
        <Link to="/">
          <Logo>
            <use href={logo + "#icon-calendar-color-icon"}></use>
          </Logo>
          <Title>Calendar app</Title>
        </Link>
      </Header>

      <Container>
        <Calendar />
        <SideBarEvents />
      </Container>
      <ModalFormAddEvents />
    </>
  );
};

export default HomePage;
