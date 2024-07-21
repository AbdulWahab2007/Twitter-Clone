import React, { useState, useContext, createContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "@radix-ui/colors/black-alpha.css";
import "@radix-ui/colors/green.css";
import "@radix-ui/colors/mauve.css";
import "@radix-ui/colors/violet.css";
import * as styles from "./Dialog";
import axios from "axios";
import { Context } from "/src/GlobalContext";
import { toast } from "sonner";

export default function SignUpButton() {
  const { isLoggedin, setIsLoggedin, name, setName } = useContext(Context);
  const { token, setToken } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handlesignup = async () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    if (password === confirmation) {
      if (
        name.length >= 3 &&
        isValid &&
        password.length >= 8 &&
        password.length < 16
      ) {
        const data = { username: name, email, password };
        const response = await axios
          .post("http://localhost:5000/api/user/signup", data)
          .catch(function (error) {
            toast.error("User Alredy Exists");
          });
        if (response.status == 200) {
          setIsLoggedin(true);
          setToken(response.data.token);
          toast.success("Successfully logged in");
        }
      } else {
        toast.error(
          "Some of your information is WRONG or INVALID!!! Check Again!"
        );
      }
    } else {
      toast.error("Please check your password");
    }
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <styles.Button $signUp>Creacte Account</styles.Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <styles.DialogOverlay className="DialogOverlay" />
          <styles.DialogContent className="DialogContent">
            <styles.Sign>
              <div className="TopBar">
                <img src="/src/Components/Icons/XLogo.png" />
              </div>
              <styles.SignUpContainer>
                <h1>Create your account</h1>
                <div className="InputHolder">
                  <styles.Input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    placeholder=""
                  />
                  <p className="placeholder">Username (At least 3 words)</p>
                </div>
                <div className="InputHolder">
                  <styles.Input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    placeholder=""
                  />
                  <p className="placeholder">Email (Only valid mails)</p>
                </div>
                <div className="InputHolder">
                  <styles.Input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="text"
                    placeholder=""
                  />
                  <p className="placeholder">Password (8 to 16 characters)</p>
                </div>
                <div className="InputHolder">
                  <styles.Input
                    value={confirmation}
                    onChange={(e) => {
                      setConfirmation(e.target.value);
                    }}
                    type="text"
                    placeholder=""
                  />
                  <p className="placeholder">Confirm Password</p>
                </div>

                <styles.Button $next onClick={handlesignup}>
                  Next
                </styles.Button>
              </styles.SignUpContainer>
            </styles.Sign>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </styles.DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
