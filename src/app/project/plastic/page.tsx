import Image from "next/image";
const Plastic = () => {
  return (
    <>
      <div>
        <h1>Replastic</h1>
        <div className="problem2">
          <div className="p-left">
            <Image
              src="/replastic.jpeg"
              width={700}
              height={500}
              alt="Picture"
            />
          </div>
          <div className="p-right">
          <h3>Problem</h3>
            <div className="list-1">
              <div className="list-item">
              <button className=" li-but"> 1</button>
              <h4>Plastic polluting certain communities<br></br></h4> <div className="t">12</div> 
              </div>
              <div className="list-item">
              <button className=" li-but"> 2</button>
              <h4> Informal Workforce seeking Employment in SA </h4>
              </div>
              <div className="list-item">
              <button className=" li-but"> 3</button>
              <h4> Corporates meeting their sustainability goals. </h4>
              </div>
              
             
            </div>
            <div className="list-2">
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plastic;
