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
                <button className=" li-but"> 1</button>
                <button className=" li-but"> 2</button>
                <button className=" li-but"> 3</button>
                
            </div>
            <div className="list-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plastic;
