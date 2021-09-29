import React, { useEffect, useState } from "react";
import { Button, Layout, Modal, Row } from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Event: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests, fetchEvents, createEvent } = useActions();
  const { guests, events } = useTypedSelector((state) => state.eventReducer);
  const { user } = useTypedSelector((state) => state.authReducer);
  const userEvents = events.filter((item) => item.author === user.username);

  useEffect(() => {
    fetchGuests();
    if (events.length === 0) {
      fetchEvents();
    }
  }, [fetchGuests, fetchEvents, events]);

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  };

  return (
    <Layout>
      <Row className="calender-container">
        <EventCalendar events={userEvents.length > 0 ? userEvents : []} />
      </Row>
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add Event</Button>
      </Row>
      <Modal
        title="Add a new Event!"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
