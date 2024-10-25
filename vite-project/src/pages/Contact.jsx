import { Suspense, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Fox from "../models/fox";
import Footer from "../components/Footer";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { showAlert, alert, hideAlert } = useAlert();
  const handleChange = ({ target: { name, value } }) => {
    setForm((currForm) => {
      return { ...currForm, [name]: value };
    });
  };
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        "service_hzjmsno",
        "template_69lwwfq",
        {
          from_name: form.name,
          to_name: "Suhail",
          from_email: form.email,
          to_email: "mohammedthanish364@gmail.com",
          message: form.message,
        },
        "Y4u_-kyILAXBT8eUR"
      )
      .then(() => {
        setLoading(false);
        showAlert({
          show: true,
          text: "Thank you for your message",
          type: "success",
        });
        setTimeout(() => {
          hideAlert(false);
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setCurrentAnimation("idle");

        showAlert({
          show: true,
          text: "I didn't receive your message",
          type: "danger",
        });
        setTimeout(() => {
          hideAlert(false);
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, 3000);
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className=" flex-1 min-w-[40%] flex flex-col ">
        <h1 className="head-text">Get in Touch</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" w-full flex flex-col gap-3 mt-2"
        >
          <label className=" text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Eg : John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className=" text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Eg : John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className=" text-black-500 font-semibold">
            Your Message
            <textarea
              rows={4}
              name="message"
              className="textarea"
              placeholder="Write Your Thoughts here...."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[[10, 10, 10]]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimations={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
//
