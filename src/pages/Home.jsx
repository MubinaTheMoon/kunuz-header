import React from "react";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-container cont">
          <div className="cards">
            <div className="card card-compact bg-white w-96 shadow-xl ">
              <figure>
                <img src="../xitoy.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Bahor yaqin! AIKO bilan yangilanish vaqti – 70% gacha
                </h2>
              </div>
            </div>
            <div className="card card-compact bg-white w-96 shadow-xl ">
              <figure>
                <img src="../daryo.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Maosh 2,5 ming dollar: Hyundai kompaniyasi
                </h2>
              </div>
            </div>
            <div className="card card-compact bg-white w-96 shadow-xl ">
              <figure>
                <img src="../aksiya.jpeg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Toshkentdagi qurilish ketayotgan binoda erkak zinadan yiqilib
                </h2>
              </div>
            </div>
          </div>
          <h3>Daryo +</h3>
          <div className="flex w-full flex-col">
            <div className="divider divider-start"></div>
          </div>

          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn">Page 22</button>
            <button className="join-item btn">»</button>
          </div>
          <div className="news">
            <div className="left">
              <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <img src="../plane.jpeg" alt="" />
                  <div className="text">
                    <h3>
                      Ular 30 ga ham kirmagan edi: hayotdan bevaqt ko‘z yumgan
                      o‘zbek shou-biznesi vakillari (foto, video)
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <img src="../plane2.jpg" alt="" />
                  <div className="text">
                    <h3>
                      “Ozarbayjon endi kichik uka emas” — sovuqlashgan ozar-rus
                      munosabatlari qanday oqibatga olib keladi?
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <img src="../zelensky.jpg" alt="" />
                  <div className="text">
                    <h3>
                      Ular 30 ga ham kirmagan edi: hayotdan bevaqt ko‘z yumgan
                      o‘zbek shou-biznesi vakillari (foto, video)
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="figure">
                  <div className="badge badge-primary">Xitoy</div>
                </figure>
                <div className="card-body card-text">
                  <h2 className="card-title">
                    Darz ketgan G'arb kollektivi. Tramp dunyoni qanday
                    o‘zgartirmoqchi?
                  </h2>
                  <p>
                    Dunyo siyosiy sahnasida har bir lider o‘z davrining muhim
                    o‘zgarishlarini belgilab berad...
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
