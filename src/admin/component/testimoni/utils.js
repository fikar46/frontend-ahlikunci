import { EditorUtils } from '@progress/kendo-react-editor';
export const insertImageFiles = ({
  view,
  files,
  nodeType,
  position,
  attrs = {},
  urlImage
}) => {
  if (EditorUtils.canInsert(view.state, nodeType)) {
    const image = nodeType.createAndFill({ ...attrs,
        src: urlImage
      });
      if (position) {
        view.dispatch(view.state.tr.insert(position.pos, image));
      } else {
        EditorUtils.insertNode(view, image, true);
      }

  }
};