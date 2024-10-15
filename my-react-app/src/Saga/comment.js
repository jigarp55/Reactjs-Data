import { getPaginationData } from "../Service/userservice";
// import { usergetData } from "../Service/userservice";
import { CommentsFail, CommentsRequest, CommentsSuc } from "../slice/comments";
// import { AccountError, AccountRequest, AccountSuc } from "../slice/user";
import { call, put, takeLeading } from "redux-saga/effects";

export function* com()
{try
    {
    let p = yield call(getPaginationData);

    yield put(CommentsSuc(p.data));
    }
    catch(error)
    {
        yield put(CommentsFail(error));
    }

}

export function* watcherComments()
{
    yield takeLeading(CommentsRequest().type,com);
}
