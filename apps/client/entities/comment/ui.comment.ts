
import show from "./show.comment";
import create from "./create.comment";
import edit from "./edit.comment";
import list from "./list.comment";

export default { 
  name: "comment",
  label: "comment",
  hide: false,
  create,
  edit,
  list,
  show,
}