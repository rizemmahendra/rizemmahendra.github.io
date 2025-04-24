import { GraduationCollection } from "@services/Firebase";
import { addDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

type dataInvitee = {
  name: string | null;
  prefix?: string | null;
  attendanceStatus: boolean | null;
};
type listInvite = {
  name: string;
  id: string;
};

const ListInvitee = (): JSX.Element => {
  const [invitee, setInvite] = useState<dataInvitee>({
    name: null,
    prefix: null,
    attendanceStatus: null,
  });
  const [invitees, setInvitees] = useState<listInvite[]>([]);

  useEffect(() => {
    const orderByName = query(GraduationCollection, orderBy("name", "asc"));
    const getInvitees = onSnapshot(orderByName, (snapshot) => {
      const listInvitess: listInvite[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setInvitees(listInvitess);
    });

    return () => {
      getInvitees();
    };
  }, []);

  const addInviteeToDatabase = async () => {
    if (invitee.name != null) {
      await addDoc(GraduationCollection, invitee)
        .then((value) => console.log(value.id))
        .finally(() =>
          setInvite({
            name: null,
            prefix: null,
            attendanceStatus: null,
          }),
        );
    }
  };

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault(); // supaya tidak navigasi
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-600">
        <div className="flex h-[80svh] w-3/4 flex-col items-center justify-start gap-4 rounded-sm bg-gray-800 p-4 md:w-3/5 md:flex-row md:justify-around">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-1">
              <label htmlFor="invitee-name">Name</label>
              <input
                type="text"
                name="invitee-name"
                id="invitee-name"
                className="text-black"
                value={invitee.name ?? ""}
                autoComplete="off"
                onChange={(e) =>
                  setInvite({ ...invitee, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <label htmlFor="invitee-prefix">Prefix</label>
              <input
                type="text"
                name="invitee-prefix"
                id="invitee-prefix"
                className="text-black"
                autoComplete="off"
                value={invitee.prefix ?? ""}
                onChange={(e) =>
                  setInvite({ ...invitee, prefix: e.target.value })
                }
              />
            </div>
            <div>
              <button
                type="button"
                className="bg-black p-2 text-white"
                onClick={() => addInviteeToDatabase()}
              >
                Added a invitee
              </button>
            </div>
          </div>
          <div className="flex max-h-[calc(55svh-1rem)] items-start justify-center overflow-y-auto md:max-h-[calc(85svh-5rem)]">
            <table className="">
              <thead className="sticky top-0 bg-gray-800">
                <th className="border-2 border-gray-600 text-center">No</th>
                <th className="border-2 border-gray-600 text-center">Nama</th>
              </thead>
              <tbody className="">
                {invitees.map((invitee, index) => (
                  <tr
                    key={invitee.id}
                    className="border-gray-600 text-left capitalize [&:not(:last-child)]:border-b-2"
                  >
                    <td>{index + 1}</td>
                    <td>
                      <a
                        href={`${window.location.origin}/graduation/${invitee.id}`}
                        onClick={(e) =>
                          handleCopy(
                            e,
                            `${window.location.origin}/graduation/${invitee.id}`,
                          )
                        }
                      >
                        {invitee.name}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListInvitee;
