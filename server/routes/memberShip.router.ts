import express from 'express';
import {getAllMembersShip,createShip,getoneMemberbyuserId,getoneMemberbyGymId} from "../controllers/memberShip.controller"
export const memberShipRoute = express.Router();

memberShipRoute.get('/getByUser/:id',getoneMemberbyuserId)
memberShipRoute.get('/getByGym/:id',getoneMemberbyGymId)
memberShipRoute.get('/getAll/',getAllMembersShip)
memberShipRoute.post('/post/',createShip)
