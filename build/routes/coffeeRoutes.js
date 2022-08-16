"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coffeeController_1 = require("../controllers/coffeeController");
const router = (0, express_1.Router)();
// GET /coffee - renders a list of coffee items
router.get('/', coffeeController_1.allCoffee);
// GET /coffee/:name - render the coffee item requested
router.get('/:name', coffeeController_1.oneCoffee);
exports.default = router;
