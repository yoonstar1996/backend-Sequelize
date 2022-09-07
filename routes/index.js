const express = require("express");
const visitor = require("../controller/VisitorController");
const router = express.Router();

router.get("/", visitor.get_visitors); // 조회할 때 select (READ)
router.post("/write", visitor.post_comment); // 새로운 정보 insert 할 때 post (CREATE)
router.get("/get", visitor.get_visitor);
router.patch("/edit", visitor.patch_comment); // update(수정) 할 때 patch (UPDATE)
// put = insert or update
router.delete("/delete", visitor.delete_comment); // delete(삭제) 할 때 delete (DELETE)

module.exports = router;