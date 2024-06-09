import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db, auth } from "./firebase";
import { useNavigate } from "react-router-dom";


export default function SurveyComponent() {
    const navigate = useNavigate();
    <button onClick={() => navigate('/', {replace: true})} className={`btn btn-ghost font-normal text-gray-500 text-lg mr-20`}>Logout</button>
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        getDoc(doc(db, 'users', auth.currentUser.uid)).then((snap) => {
            setDoc(doc(db, 'surveyResults', auth.currentUser.uid), {
                ...sender.data,
                fName: snap.data()['fName'],
                lName: snap.data()['lName'],
                email: snap.data()['email'],
                uid: auth.currentUser.uid,
            });
        });
        
    });
    return (<Survey model={survey} />);
}

