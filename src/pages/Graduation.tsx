import { useParams } from "react-router-dom";
import { GraduationCollection } from "@services/Firebase";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import NotFound from "./Not+Found";

type inviteeDetail = {
  name: string;
  prefix?: string;
  attendanceStatus?: boolean | null;
};

const Graduation = (): JSX.Element => {
  document.title = "Rizem Mahendra Graduation Celebration";
  let { inviteeId } = useParams();
  if (!inviteeId) return <NotFound />;

  const [invitee, setInvitee] = useState<inviteeDetail | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showDonation, setShowDonation] = useState<boolean>(false);

  useEffect(() => {
    const getInvitee = async () => {
      const docRef = doc(GraduationCollection, inviteeId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setInvitee(docSnap.data() as inviteeDetail);
        // console.log("Document data:", docSnap.data());
      } else {
        console.log("not found");
      }
    };

    inviteeId ? getInvitee() : null;
  }, [inviteeId]);

  const updateAttendance = async (status: boolean) => {
    try {
      await updateDoc(doc(GraduationCollection, inviteeId), {
        attendanceStatus: status,
      }).catch((error) => console.log(error));
      setInvitee((prevValue) =>
        prevValue ? { ...prevValue, attendanceStatus: status } : prevValue,
      );
    } catch (erro) {
      console.log(erro);
    }
  };

  if (!invitee) return <NotFound message="Are You Authorized?" />;

  return (
    <>
      <div
        className="bg-black-100 flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-cover bg-right bg-no-repeat px-4 py-2 text-white md:gap-10 md:px-40 md:py-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.72),rgba(0,0,0,0.72)),url('/background.png')`,
        }}
      >
        <div className="flex w-full items-center justify-start gap-2">
          <img
            src="/icons/graduated.png"
            className="aspect-square h-20 md:h-10"
            alt=""
          />
          <h1
            className="text-left font-Montserrat text-5xl font-bold text-third"
            style={{
              textShadow: `2px 1px 5px red, -2px -2px 5px blue`,
            }}
          >
            Graduation Invitation
          </h1>
        </div>
        <div className="flex w-full flex-col justify-end gap-5 md:flex-row md:gap-0">
          <div
            className="flex flex-1 flex-col justify-between md:justify-around"
            id="detail-event"
          >
            <div className="text-third" id="invitation-sentence">
              <span className="text-3xl font-bold capitalize">
                Hi {invitee?.prefix} {invitee?.name},
              </span>
              <p className="text-2xl">
                I’m excited to invite you to the my graduation celebration
              </p>
            </div>
            <div className="hidden text-[#B7B7B7] md:block" id="place-datetime">
              <div className="flex items-center justify-start gap-2">
                <img src="/icons/clock.png" alt="" className="h-6 w-6" />
                <p className="text-2xl font-semibold">13:00 PM - Finish</p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <img src="/icons/calendar.png" alt="" className="h-5 w-5" />
                <p className="text-2xl font-semibold">3 May 2025</p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <a
                  href="https://maps.app.goo.gl/x9tGQT9cTLrjtZ6z7"
                  target="blank"
                  className="flex items-center justify-start gap-3"
                >
                  <img src="/icons/map.png" alt="" className="h-5 w-5" />
                  <p className="flex text-2xl font-semibold">Seminar F</p>
                </a>
              </div>
              <div className="flex items-center justify-start gap-3">
                <img src="/icons/university.png" alt="" className="h-5 w-5" />
                <p className="text-2xl font-semibold">Andalas University</p>
              </div>
            </div>
            <div className="hidden md:block" id="cta-container">
              <button
                className="flex items-center gap-2 rounded-md bg-third px-4 py-2 text-xl font-semibold text-black"
                onClick={() => setShowPopup(true)}
              >
                <img src="/icons/tap.png" alt="" className="h-5 w-5" />
                Confirm Your Attendance
              </button>
            </div>
          </div>
          <div className="flex flex-1 gap-x-4 md:gap-x-12" id="photo-galery">
            <div className="flex flex-col justify-end" id="photo-1">
              <img className="bottom-0" src="/foto-2.jpg" alt="" />
            </div>
            <div className="md:gap2 flex flex-col gap-1" id="photo-2">
              <img className="" src="/foto-1.jpg" alt="" />
              <span className="text-center font-Poppins text-3xl font-black text-white text-stroke-2">
                CLASS OF
              </span>
              <span className="text-center font-Poppins text-5xl font-black tracking-widest text-white text-stroke-2">
                2025
              </span>
            </div>
          </div>
          <div className="flex w-full justify-around md:hidden">
            <div className="text-white" id="place-datetime">
              <div className="flex items-center justify-start gap-2">
                <img src="/icons/clock.png" alt="" className="h-6 w-6" />
                <p className="text-2xl font-semibold">13:00 PM - Finish</p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <img src="/icons/calendar.png" alt="" className="h-5 w-5" />
                <p className="text-2xl font-semibold">3 May 2025</p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <a
                  href="https://maps.app.goo.gl/x9tGQT9cTLrjtZ6z7"
                  target="blank"
                  className="flex items-center justify-start gap-3"
                >
                  <img src="/icons/map.png" alt="" className="h-5 w-5" />
                  <p className="flex text-2xl font-semibold">Seminar F</p>
                </a>
              </div>
              <div className="flex items-center justify-start gap-3">
                <img src="/icons/university.png" alt="" className="h-5 w-5" />
                <p className="text-2xl font-semibold">Andalas University</p>
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center md:hidden"
            id="cta-container"
          >
            <button
              className="flex w-5/6 items-center justify-center rounded-md bg-third px-2 py-2 text-xl font-semibold text-black"
              onClick={() => setShowPopup(true)}
            >
              <img src="/icons/tap.png" alt="" className="aspect-square h-9" />
              Confirm Your Attendance
            </button>
          </div>
        </div>
        {showPopup && (
          <div className="absolute flex min-h-screen min-w-full items-center justify-center bg-black/50 transition-transform">
            <div
              className={`relative h-1/2 w-5/6 transform rounded-md border-[4px] border-third bg-gray-700/60 px-2 py-5 text-gray-200 transition-all delay-500 duration-300 ease-in-out sm:px-5 ${
                showPopup ? "scale-100 opacity-100" : "scale-75 opacity-0"
              } ${showDonation ? "md:w-3/5" : "md:w-3/5 lg:w-2/5"}`}
            >
              <button
                className="absolute -right-2 -top-2 flex h-2 w-2 items-center justify-center rounded-md bg-gray-500 p-3 hover:scale-150"
                onClick={() => setShowPopup(false)}
              >
                <span>X</span>
              </button>
              <div>
                <h1 className="text-center text-2xl">Are You Coming?</h1>
                <h3 className="text-center text-lg">
                  Are you available to attend the event?
                </h3>
                <div className="my-3 flex justify-evenly">
                  <button
                    className={`rounded-md border-[4px] border-solid bg-green-700/90 px-2 py-2 transition delay-75 duration-75 ease-in-out hover:scale-[1.025] ${invitee?.attendanceStatus === true ? "border-white-500" : "border-transparent"} hover:bg-green-600/90`}
                    onClick={() => updateAttendance(true)}
                  >
                    I’ll Be There!
                  </button>
                  <button
                    className={`rounded-md border-[4px] border-solid bg-red-700/90 px-2 py-2 transition delay-75 duration-75 ease-in-out hover:scale-[1.025] hover:bg-red-600/90 ${invitee?.attendanceStatus === false ? "border-white-500" : "border-transparent"}`}
                    onClick={() => updateAttendance(false)}
                  >
                    Sorry, I Can't Make It
                  </button>
                </div>
              </div>
              <div className="border-b-4 py-2">
                <h1 className="text-center">
                  {invitee?.attendanceStatus === true
                    ? "🥳 Thank you for planning to come"
                    : invitee?.attendanceStatus === false
                      ? "😊 No Problem, I Appreciate That"
                      : "🤔 You haven't made a choice yet"}
                </h1>
              </div>
              <div className="mt-2 flex flex-col items-center justify-center gap-2 text-center">
                <h2>Want to support me in another way?</h2>
                <div className="items center mb-5 flex justify-center">
                  <button
                    className="flex items-center justify-between rounded-md bg-third px-2 py-1 font-semibold text-black"
                    onClick={() => setShowDonation((value) => !value)}
                  >
                    <img
                      src="/icons/tap.png"
                      alt=""
                      className="aspect-square h-5"
                    />{" "}
                    Click Me to {showDonation ? "Close" : "Open"} Option
                  </button>
                </div>
                <div
                  className={`w-full transform overflow-y-scroll transition-all duration-1000 ease-in-out md:overflow-hidden ${showDonation ? "max-h-96" : "max-h-0"}`}
                >
                  <div className="flex h-auto w-full flex-col items-center justify-around gap-4 md:flex-row md:gap-0">
                    <div
                      id="dana"
                      className="flex flex-col items-center justify-center gap-1"
                    >
                      <img
                        src="/dana.jpg"
                        className="aspect-square w-48"
                        alt=""
                      />
                      <img
                        src="/logo_dana.png"
                        className="aspect-video h-9 w-16 object-contain"
                        alt=""
                      />
                    </div>
                    <div
                      id="gopay"
                      className="flex flex-col items-center justify-center gap-1"
                    >
                      <img
                        src="/gopay.jpg"
                        className="aspect-square w-48"
                        alt=""
                      />
                      <img
                        src="/logo_gopay.png"
                        className="aspect-video h-9 w-16 object-contain"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Graduation;
