import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import axios from "axios";

const CardComp = (props) => {
  const dataUser = useSelector((state) => state.Auth);

  const onBuyClick = (id) => {
    axios
      .post(`http://localhost:5000/postVoucher`, {
        email: dataUser.email,
        userId: dataUser.id,
        voucherId: id,
      })
      .then((res) => {
        alert("success");
      })
      .catch((err) => {
        alert("gagal");
      });
  };

  return (
    <div className="px-3">
      <Card>
        <CardImg
          top
          width="100%"
          src={"http://localhost:4000" + props.image}
          alt="Card image cap"
          height="300px"
        />
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <Button onClick={() => onBuyClick(props.id)}>Buy</Button>
        </CardBody>
      </Card>
    </div>
  );
};

const Home = () => {
  const dataUser = useSelector((state) => state.Auth);

  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/coba`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderCard = () => {
    return data.map((val, index) => {
      return <CardComp key={index} {...val} />;
    });
  };

  if (!dataUser.islogin) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="px-5 py-5">
      <div className="d-flex">{renderCard()}</div>
    </div>
  );
};

export default Home;
