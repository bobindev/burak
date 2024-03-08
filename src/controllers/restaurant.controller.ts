// controllerlar har doim object lar orqali hosil qilinadi
import { Request, Response } from 'express';
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const memberService = new MemberService();

const restaurantContoller: T = {};
//Bu yerda controllarga tegishli methodlarni qurib olamiz
restaurantContoller.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.send("Homepage");
    } catch (err) {
        console.log("Error, goHome", err);
    }

};

restaurantContoller.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, getSignup", err);
        res.send(err);
    }

};

restaurantContoller.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin", err);
    }

};



restaurantContoller.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        console.log("body:", req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        //TODO: SESSIONS AUTHENTICATION

        res.send(result);
    } catch (err) {
        console.log("Error, processSignup:", err);
        res.send(err);
    }

};

restaurantContoller.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");

        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input)
        //TODO: SESSIONS AUTHENTICATION

        res.send(result);
    } catch (err) {
        console.log("Error, processLogin", err);
        res.send(err);
    }

};



export default restaurantContoller;
