import React, { useState } from "react";

const SeatSelection = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seats, setSeats] = useState([
    { id: 1, available: true },
    { id: 2, available: true },
    { id: 3, available: true },
    { id: 4, available: true }
  ]);

  const handleSeatClick = seatId => {
    setSelectedSeat(seatId);
  };

  const handleBuyTicket = () => {
    if (!selectedSeat) {
      alert("Please select a seat");
      return;
    }
    const updatedSeats = seats.map(seat => {
      if (seat.id === selectedSeat) {
        return { ...seat, available: false };
      }
      return seat;
    });
    setSeats(updatedSeats);
    setSelectedSeat(null);
    alert(`Ticket purchased for seat ${selectedSeat}`);
  };

  return (
    <div>
      <h2>Select Seat:</h2>
      <div style={{ display: "flex" }}>
        {seats.map(seat => (
          <div
            key={seat.id}
            style={{
              width: 50,
              height: 50,
              backgroundColor: seat.available
                ? "lightgreen"
                : "lightgray",
              margin: 10,
              border:
                seat.id === selectedSeat
                  ? "1px solid black"
                  : "1px solid lightgray"
            }}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.id}
          </div>
        ))}
      </div>
      <button onClick={handleBuyTicket}>Buy Ticket</button>
    </div>
  );
};

export default SeatSelection;