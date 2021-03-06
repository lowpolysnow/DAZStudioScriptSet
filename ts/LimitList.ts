﻿
/** Limitの状態を示すenum */
enum LimitState {
    NONE, ON, OFF
}

/** NodeIdの特殊な番号を示すenum */
enum NodeIdType {
    INIT = -1,
    ROOT = 0
}

/** 本スクリプトが対応しているFigure名
 *  【TODO】今後、対応するFigureが増えたときは、ここに追記する。
 */
enum FigureName {
    Genesis3Female
}

const TargetPath = "/General/Transforms/Rotation";
const XRotate = "XRotate";
const YRotate = "YRotate";
const ZRotate = "ZRotate";


/** XYZシンボルのファイル名の一部(X) */
enum SymbolCharX {
    "_" = LimitState.NONE,
    "-" = LimitState.OFF,
    "X" = LimitState.ON
}
/** XYZシンボルのファイル名の一部(Y) */
enum SymbolCharY {
    "_" = LimitState.NONE,
    "-" = LimitState.OFF,
    "Y" = LimitState.ON
}
/** XYZシンボルのファイル名の一部(Z) */
enum SymbolCharZ {
    "_" = LimitState.NONE,
    "-" = LimitState.OFF,
    "Z" = LimitState.ON
}

/** Figureのノード構成(NameとXYZシンボルの配置場所)
 *  【TODO】今後、対応したFigureが増えたときは、ここに追記する。
 */
let nodes = {
    "Genesis3Female" : {
        "hip": { x: 392, y: 433 }
        , "pelvis": { x: 408, y: 450 }
        , "lThighBend": { x: 444, y: 477 }
        , "lThighTwist": { x: 446, y: 582 }
        , "lShin": { x: 454, y: 693 }
        , "lFoot": { x: 624, y: 540 }
        , "lMetatarsals": { x: 623, y: 676 }
        , "lToe": { x: 623, y: 793 }
        , "lSmallToe4": { x: 686, y: 804 }
        , "lSmallToe4_2": { x: 686, y: 849 }
        , "lSmallToe3": { x: 661, y: 813 }
        , "lSmallToe3_2": { x: 661, y: 858 }
        , "lSmallToe2": { x: 639, y: 826 }
        , "lSmallToe2_2": { x: 639, y: 871 }
        , "lSmallToe1": { x: 607, y: 830 }
        , "lSmallToe1_2": { x: 608, y: 876 }
        , "lBigToe": { x: 563, y: 820 }
        , "lBigToe_2": { x: 564, y: 871 }
        , "lHeel": { x: 590, y: 638 }
        , "rThighBend": { x: 365, y: 477 }
        , "rThighTwist": { x: 364, y: 583 }
        , "rShin": { x: 355, y: 692 }
        , "rFoot": { x: 185, y: 538 }
        , "rMetatarsals": { x: 186, y: 676 }
        , "rToe": { x: 186, y: 794 }
        , "rSmallToe4": { x: 123, y: 803 }
        , "rSmallToe4_2": { x: 122, y: 849 }
        , "rSmallToe3": { x: 148, y: 813 }
        , "rSmallToe3_2": { x: 148, y: 859 }
        , "rSmallToe2": { x: 171, y: 826 }
        , "rSmallToe2_2": { x: 170, y: 871 }
        , "rSmallToe1": { x: 201, y: 830 }
        , "rSmallToe1_2": { x: 201, y: 876 }
        , "rBigToe": { x: 245, y: 821 }
        , "rBigToe_2": { x: 244, y: 873 }
        , "rHeel": { x: 219, y: 637 }
        , "abdomenLower": { x: 404, y: 394 }
        , "abdomenUpper": { x: 404, y: 351 }
        , "chestLower": { x: 404, y: 307 }
        , "chestUpper": { x: 404, y: 239 }
        , "lCollar": { x: 436, y: 220 }
        , "lShldrBend": { x: 495, y: 223 }
        , "lShldrTwist": { x: 558, y: 226 }
        , "lForearmBend": { x: 622, y: 226 }
        , "lForearmTwist": { x: 679, y: 224 }
        , "lHand": { x: 547, y: 351 }
        , "lThumb1": { x: 564, y: 393 }
        , "lThumb2": { x: 611, y: 432 }
        , "lThumb3": { x: 648, y: 455 }
        , "lCarpal1": { x: 581, y: 376 }
        , "lIndex1": { x: 660, y: 396 }
        , "lIndex2": { x: 715, y: 410 }
        , "lIndex3": { x: 762, y: 419 }
        , "lCarpal2": { x: 596, y: 349 }
        , "lMid1": { x: 669, y: 365 }
        , "lMid2": { x: 727, y: 376 }
        , "lMid3": { x: 773, y: 383 }
        , "lCarpal3": { x: 591, y: 332 }
        , "lRing1": { x: 669, y: 339 }
        , "lRing2": { x: 727, y: 345 }
        , "lRing3": { x: 775, y: 346 }
        , "lCarpal4": { x: 585, y: 315 }
        , "lPinky1": { x: 648, y: 314 }
        , "lPinky2": { x: 692, y: 314 }
        , "lPinky3": { x: 727, y: 312 }
        , "rCollar": { x: 372, y: 220 }
        , "rShldrBend": { x: 315, y: 223 }
        , "rShldrTwist": { x: 252, y: 227 }
        , "rForearmBend": { x: 187, y: 225 }
        , "rForearmTwist": { x: 131, y: 222 }
        , "rHand": { x: 262, y: 355 }
        , "rThumb1": { x: 244, y: 396 }
        , "rThumb2": { x: 197, y: 434 }
        , "rThumb3": { x: 164, y: 460 }
        , "rCarpal1": { x: 229, y: 380 }
        , "rIndex1": { x: 149, y: 398 }
        , "rIndex2": { x: 94, y: 412 }
        , "rIndex3": { x: 48, y: 421 }
        , "rCarpal2": { x: 216, y: 352 }
        , "rMid1": { x: 141, y: 367 }
        , "rMid2": { x: 82, y: 378 }
        , "rMid3": { x: 38, y: 385 }
        , "rCarpal3": { x: 219, y: 335 }
        , "rRing1": { x: 140, y: 342 }
        , "rRing2": { x: 82, y: 346 }
        , "rRing3": { x: 37, y: 348 }
        , "rCarpal4": { x: 225, y: 318 }
        , "rPinky1": { x: 160, y: 318 }
        , "rPinky2": { x: 118, y: 315 }
        , "rPinky3": { x: 83, y: 315 }
        , "neckLower": { x: 394, y: 185 }
        , "neckUpper": { x: 415, y: 168 }
        , "head": { x: 397, y: 147 }
        , "upperTeeth": { x: 644, y: 77 }
        , "lowerJaw": { x: 616, y: 103 }
        , "lowerTeeth": { x: 624, y: 139 }
        , "tongue01": { x: 666, y: 136 }
        , "tongue02": { x: 701, y: 145 }
        , "tongue03": { x: 734, y: 160 }
        , "tongue04": { x: 758, y: 182 }
        , "lEye": { x: 698, y: 33 }
        , "rEye": { x: 660, y: 29 }
        , "lPectoral": { x: 430, y: 264 }
        , "rPectoral": { x: 377, y: 264 }

    }
};


/** Limitの設定保持専用のクラス */
class LimitNode {
    X: LimitState = LimitState.NONE;
    Y: LimitState = LimitState.NONE;
    Z: LimitState = LimitState.NONE;

    NodeId: number = NodeIdType.INIT;
    ParentLimitNode: LimitNode;
    NodeInfo: DzNode;

    ChildLimitNode: Array<LimitNode>;

    constructor(CurrentNode: DzNode) {
        this.ParentLimitNode = null;
        this.NodeInfo = CurrentNode;
        this.ChildLimitNode = new Array<LimitNode>();
    }
}

/**
 * 選択中のNodeの所属するFigureのルートノードを検索する。
 * @param current_node 選択中のノード
 * @returns ルートノードのDzNode。見つからなかったときはnull。
 */
function SearchRootNode(current_node: DzNode): DzNode {
    let search = true;
    let top_parent = null;
    while (search) {
        if (current_node == null) {
            return null;
        }

        if (FigureName.hasOwnProperty(current_node.getName().toString())) {
            search = false;
            top_parent = current_node;
        }
        current_node = current_node.getNodeParent();
    }
    return top_parent;
}

/**
 * 対象ノードのLimitの設定を取得する。
 * 対象ノードがLimitのParameterを持っていないときは、LimitState.NONEを返す。(XRotateのみ持っていないなどのパターンがある)
 * @param target_path 取得したいPropertyのPath
 * @param rotate 取得したいParameterの名前
 * @returns Limitの取得結果。
 */
function getLimitState(current_node: DzNode, target_path: string, rotate: string): LimitState {
    let current_node_props = current_node.getPropertyList();
    for (let i = 0; i < current_node_props.length; i++) {
        if (current_node_props[i].getPath() == target_path) {
            if (current_node_props[i].getName() == rotate) {
                if (current_node_props[i].isHidden() == false) {
                    let current_node_numprop = current_node_props[i] as DzNumericProperty;
                    if (current_node_numprop.isClamped()) {
                        return LimitState.ON;
                    } else {
                        return LimitState.OFF;
                    }
                }
            }
        }
    }
    return LimitState.NONE;
}



/**
 * 再帰呼び出しでSceneで見えるNodeツリーを模したLimitNodeツリーを生成。
 * 下記の条件に該当したノードを末端とするツリーを生成する。
 * 　・処理対象のNode自身がHiddenである。→nullを返して終了
 * 　・処理対象のNodeがChildNodeの検索・処理が終了。→子Nodeの有無や自身の情報をもったLimitNodeを返す
 * LimitNodeツリーはArray型にしているため、Listとしてもアクセスができる。
 * 
 * @param limit_node_tree [Input/Output] 作成するLimitNodeの木構造(mutable)
 * @param parent_limit_node [Input] このフェーズで生成するLimitNodeの親LimitNode
 * @param current_node [Input] Sceneで見えるNodeツリーのうち、現在処理対象のノード
 * @param current_limit_node_id [Input] 新規作成するLimitNodeに一意に振られるID
 * @returns nullのときは、現在処理対象のノードは追加対象外。それ以外は自身(現在処理対象)のノードを返す。
 */
function CreateLimitNodeHierarchy(limit_node_tree: Array<LimitNode>, parent_limit_node: LimitNode, current_node: DzNode, current_limit_node_id: number): LimitNode {

    if (current_node.isHidden()) {
        return null;
    }

    //このフェーズで生成するLimitNodeを作成
    let current_limit_node = new LimitNode(current_node);

    //LimitNodeに対応するノードをそのまま格納
    current_limit_node.NodeInfo = current_node;

    //LimitNodeの設定を格納
    current_limit_node.X = getLimitState(current_node, TargetPath, XRotate);
    current_limit_node.Y = getLimitState(current_node, TargetPath, YRotate);
    current_limit_node.Z = getLimitState(current_node, TargetPath, ZRotate);


    //子ノードを検索して、ChildLimitNodeへの格納処理を起動
    //子ノードがいる場合は、子LimitNodeに登録して、
    //子ノードがいない場合は、子LimitNodeはnullのまま返すLimitNodeを整えて返して終了。
    let child_nodes = current_node.getNodeChildren(false) as Array<DzNode>;
    if (child_nodes.length == 0) {
        current_limit_node.NodeId = current_limit_node_id;
        current_limit_node.ParentLimitNode = parent_limit_node;
        current_limit_node.NodeInfo = current_node;
        return current_limit_node;
    }
    for (let i = 0; i < child_nodes.length; i++) {

        let child_limit_node = CreateLimitNodeHierarchy(limit_node_tree, current_limit_node, child_nodes[i], current_limit_node_id + 1);
        if (child_limit_node != null) {
            limit_node_tree.push(child_limit_node);
            current_limit_node.ChildLimitNode.push(child_limit_node);
        }
    }
    current_limit_node.NodeId = current_limit_node_id;
    current_limit_node.ParentLimitNode = parent_limit_node;
    current_limit_node.NodeInfo = current_node;

    return current_limit_node;
}

/**
 * パスに"/"が無いとき追加。
 * @param path 処理対象のパス文字列
 * @returns 編集後のパス文字列
 */
function TreatPath(path: string): string {
    if (path[path.length - 1] != "/") {
        path = path.concat("/");
    }
    return path;
}

/**
 * メイン処理
 */
(function () {

    /** スクリプトで表示する画像ファイルの場所 */
    const basepath = "C:/DAZ Studio/LimitList/images/";
   
    //Nodeペインで選択中のNodeが処理開始対象(FigureのNode)
    //ノードを根方向へ辿り、Figureのルートを探す。
    //候補のNodeが見つかったら終了。
    //nullのときは、候補のNodeではないので、スクリプト終了。
    let top_parent: DzNode = SearchRootNode(Scene.getSelectedNode(0) );
    if (top_parent == null) {
        return;
    }

    let figurename = top_parent.getName();
    let background = TreatPath(basepath) + figurename + "_background.png";

    let dialog = new DzDialog;

    //ラベル要素(背景)
    let background_label = new DzLabel(dialog);
    let pixImage = new Pixmap(background);
    background_label.pixmap = pixImage;

    //ルート（Genesis3Female）から、下のノードを取得していく。
    //非表示のノードは処理対象外。
    //Sceneペインで見えているノードが、Limitを確認したいノードのため。
    let limit_node_tree = new Array<LimitNode>();
    let current_node = top_parent;
    let current_limit_node_id = NodeIdType.ROOT;
    limit_node_tree.push(CreateLimitNodeHierarchy(limit_node_tree, null, current_node, current_limit_node_id));


    //XYZシンボルを配置
    for (let i = 0; i < limit_node_tree.length; i++) {

        //nodesに定義の無いものは表示対象外。
        if (nodes[figurename.toString()][limit_node_tree[i].NodeInfo.getName().toString()] == undefined) {
            continue;
        }

        let xyzsymbol = new DzLabel(dialog);
        xyzsymbol.pixmap = new Pixmap( TreatPath(basepath) +
            SymbolCharX[limit_node_tree[i].X] + SymbolCharY[limit_node_tree[i].Y] + SymbolCharZ[limit_node_tree[i].Z] + ".png")
        xyzsymbol.x = nodes[figurename.toString()][limit_node_tree[i].NodeInfo.getName().toString()].x;
        xyzsymbol.y = nodes[figurename.toString()][limit_node_tree[i].NodeInfo.getName().toString()].y;
    }    

    //ダイアログ設定
    dialog.width = pixImage.width;
    dialog.height = pixImage.height;

    dialog.exec();

})();
