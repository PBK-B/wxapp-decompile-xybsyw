var e = require("@babel/runtime/helpers/typeof");

require("./runtime"), require("./common"), require("./vendors"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 4 ], {
    1316: function(t, n, o) {
        function a() {
            return Math.random().toString(36).substring(7).split("").join(".");
        }
        o.r(n);
        var i = o(0), s = o.n(i), r = o(2), c = o.n(r), l = o(3), u = o(12), p = o(11), g = (n = (o(449), 
        o(8)), o(49)), d = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        }, m = {
            INIT: "@@redux/INIT" + a(),
            REPLACE: "@@redux/REPLACE" + a(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + a();
            }
        };
        function f(e) {
            if ("object" === (void 0 === e ? "undefined" : d(e)) && null !== e) {
                for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t;
            }
        }
        function h(e, t, n) {
            if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
            if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
                if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
                return n(h)(e, t);
            }
            if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
            var o = e, a = t, i = [], s = i, r = !1;
            function c() {
                if (r) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                return a;
            }
            function l(e) {
                if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
                if (r) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                var t = !0;
                return (s = s === i ? i.slice() : s).push(e), function() {
                    if (t) {
                        if (r) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                        t = !1;
                        var n = (s = s === i ? i.slice() : s).indexOf(e);
                        s.splice(n, 1), i = null;
                    }
                };
            }
            function u(e) {
                if (!f(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (r) throw new Error("Reducers may not dispatch actions.");
                try {
                    r = !0, a = o(a, e);
                } finally {
                    r = !1;
                }
                for (var t = i = s, n = 0; n < t.length; n++) (0, t[n])();
                return e;
            }
            return u({
                type: m.INIT
            }), (t = {
                dispatch: u,
                subscribe: l,
                getState: c,
                replaceReducer: function(e) {
                    if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                    o = e, u({
                        type: m.REPLACE
                    });
                }
            })[g.a] = function() {
                var e = l, t = {
                    subscribe: function(t) {
                        if ("object" !== (void 0 === t ? "undefined" : d(t)) || null === t) throw new TypeError("Expected the observer to be an object.");
                        function n() {
                            t.next && t.next(c());
                        }
                        return n(), {
                            unsubscribe: e(n)
                        };
                    }
                };
                return t[g.a] = function() {
                    return this;
                }, t;
            }, t;
        }
        function y(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), 
            t ? n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }) : n;
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? y(n, !0).forEach(function(t) {
                    !function(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n;
                    }(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function v() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return 0 === t.length ? function(e) {
                return e;
            } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
                return function() {
                    return e(t.apply(void 0, arguments));
                };
            });
        }
        function w(e) {
            return function(t) {
                var n = t.dispatch, o = t.getState;
                return function(t) {
                    return function(a) {
                        return "function" == typeof a ? a(n, o, e) : t(a);
                    };
                };
            };
        }
        (i = w()).withExtraArgument = w;
        r = i;
        var S = o(27), x = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, o = arguments[t];
                for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            }
            return e;
        }, j = {
            num: 0
        }, D = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, o = arguments[t];
                for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            }
            return e;
        }, I = {
            id: 1,
            name: "北京",
            statusBarHeight: 0,
            screenHeight: 0,
            screenWidth: 0,
            navHeight: 0,
            termObj: null,
            gradeObj: null,
            teacherInfo: {},
            getWebsocketCallBack: function() {}
        }, k = function(e) {
            for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
                var a = t[o];
                "function" == typeof e[a] && (n[a] = e[a]);
            }
            var i, s = Object.keys(n);
            try {
                !function(e) {
                    Object.keys(e).forEach(function(t) {
                        var n = e[t];
                        if (void 0 === n(void 0, {
                            type: m.INIT
                        })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                        if (void 0 === n(void 0, {
                            type: m.PROBE_UNKNOWN_ACTION()
                        })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + m.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
                    });
                }(n);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                i = e;
            }
            return function(e, t) {
                if (void 0 === e && (e = {}), i) throw i;
                for (var o = !1, a = {}, r = 0; r < s.length; r++) {
                    var c = s[r], l = n[c], u = e[c], p = l(u, t);
                    if (void 0 === p) throw l = function(e, t) {
                        return "Given " + ((t = t && t.type) && 'action "' + String(t) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
                    }(c, t), new Error(l);
                    a[c] = p, o = o || p !== u;
                }
                return (o = o || s.length !== Object.keys(e).length) ? a : e;
            };
        }({
            counter: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : j;
                switch (arguments[1].type) {
                  case S.a:
                    return x({}, e, {
                        num: e.num + 1
                    });

                  case S.b:
                    return x({}, e, {
                        num: e.num - 1
                    });

                  default:
                    return e;
                }
            },
            xybData: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : I;
                return arguments[1].type !== S.c ? e : D({}, e);
            }
        }), O = (i = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        }, ("object" === ("undefined" == typeof window ? "undefined" : i(window)) && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : v)(function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function(e) {
                return function() {
                    var n = e.apply(void 0, arguments), o = function() {
                        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
                    }, a = {
                        getState: n.getState,
                        dispatch: function() {
                            return o.apply(void 0, arguments);
                        }
                    }, i = t.map(function(e) {
                        return e(a);
                    });
                    return b({}, n, {
                        dispatch: o = v.apply(void 0, i)(n.dispatch)
                    });
                };
            };
        }.apply(void 0, [ r ]))), P = o(14), C = o(13);
        r = function(e, t, n) {
            return t && L(e.prototype, t), n && L(e, n), e;
        };
        function L(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        function E(t, n) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != e(n) && "function" != typeof n ? t : n;
        }
        var R = h(k, O);
        function T() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, T);
            for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
            return (e = t = E(this, (e = T.__proto__ || Object.getPrototypeOf(T)).call.apply(e, [ this ].concat(o)))).config = {
                pages: [ "pages/find/index/index", "pages/growup/growup", "pages/index/index", "pages/mine/index/index", "pages/message/index/index", "pages/AuthenticationError/AuthenticationError" ],
                subpackages: [ {
                    root: "secondBag",
                    name: "secondBag",
                    pages: [ "pages/talentPolicy/talentPolicy", "pages/meiliDetail/meiliDetail", "pages/videoShow/videoShow", "pages/talentPolicy/ShareTalentPolicyDetail/ShareTalentPolicyDetail", "pages/mine/useragreement/useragreement", "pages/mine/schoolcensus/showsuccess/showsuccess", "pages/mine/schoolcensus/sucstatus/sucstatus", "pages/mine/sendrecord/sendrecord", "pages/mine/schoolcensus/index/index", "pages/mine/schoolcensus/failstatus/failstatus", "pages/mine/schoolcensus/selectSchool/selectSchool", "pages/mine/personaldata/index/index", "pages/mine/personaldata/editusername/editusername", "pages/mine/collectposition/collectposition", "pages/mine/sendrecorddetail/sendrecorddetail", "pages/mine/collectposintroduce/collectposintroduce", "pages/mine/setting/setting", "pages/mine/personaldata/editnickname/editnickname", "pages/mine/commonFollow/index", "pages/mine/editpersonalinfo/editpersonalinfo", "pages/mine/editeducationexp/editeducationexp", "pages/mine/editinternshipexp/editinternshipexp", "pages/mine/mypublish/mypublish", "pages/mine/myfollow/myfollow", "pages/mine/myfans/myfans", "pages/mine/qrLoginSuccess/qrLoginSuccess", "pages/mine/schoolcensus/schoolcensuslist/schoolcensuslist", "pages/alumniCircle/alumniCircle", "pages/courseDetails/courseDetails", "pages/mine/myCourse/myCourse", "pages/jobInformation/jobInformation", "pages/mine/schoolcensus/studentComplaint/studentComplaint", "pages/city/city" ]
                }, {
                    root: "thirdBag",
                    name: "thirdBag",
                    pages: [ "pages/myresume/index/index", "pages/myresume/editpersonalinfo/index/index", "pages/myresume/editpersonalinfo/schoolduty/schoolduty", "pages/myresume/editpersonalinfo/skills/skills", "pages/myresume/resumepreview/resumepreview", "pages/myresume/editpersonalinfo/expectjobs/expectjobs", "pages/myresume/editpersonalinfo/expectcitys/expectcitys", "pages/myresume/editpersonalinfo/jobintention/jobintention", "pages/myresume/editpersonalinfo/educationexp/educationexp", "pages/myresume/editpersonalinfo/projectexperience/projectexperience", "pages/myresume/editpersonalinfo/internshipexperience/internshipexperience", "pages/myresume/editpersonalinfo/summaryintroduce/summaryintroduce", "pages/myresume/editpersonalinfo/trainexperience/trainexperience", "pages/myresume/editPractice/editPractice", "pages/myresume/editPracticeDetail/editPracticeDetail", "pages/myresume/addDailog/addDailog", "pages/myresume/dailogDetail/dailogDetail", "pages/myresume/editpersonalinfo/expectjobSeach/expectjobSeach", "pages/privateSphere/privateSphere", "pages/privateSphereAccreditation/privateSphereAccreditation", "pages/privateSphereOfficialAccounts/privateSphereOfficialAccounts", "pages/privateSphereSchool/privateSphereSchool", "pages/accessoryResume/resumeList/resumeList", "pages/accessoryResume/uploadWay/uploadWay", "pages/accessoryResume/uploadResume/uploadResume" ]
                }, {
                    root: "fourthBag",
                    name: "fourthBag",
                    pages: [ "pages/find/hotTopic/hotTopic", "pages/find/enterpriseSession/enterpriseSession", "pages/find/recruit/recruit", "pages/find/recruitCompany/recruitCompany", "pages/find/recruitPosition/recruitPosition", "pages/find/springRecruit/springRecruit", "pages/find/recruitCity/recruitCity", "pages/find/weeklyNewPosts/weeklyNewPosts", "pages/find/testresult/testresult", "pages/find/testintroduce/testintroduce", "pages/find/whereindex/whereindex", "pages/find/wherethird/wherethird", "pages/find/wheresecond/wheresecond", "pages/find/selectprofession/selectprofession", "pages/find/naturetest/naturetest", "pages/find/introducedetail/introducedetail", "pages/find/starttest/starttest", "pages/find/wxarticle/wxarticle", "pages/find/moreTopic/moreTopic", "pages/find/hotMoreTopic/hotMoreTopic", "pages/find/springRecruitThreeTypes/springRecruitThreeTypes" ]
                }, {
                    root: "fifthBag",
                    name: "fifthBag",
                    pages: [ "pages/jobModule/preDoubleMeeting/preDoubleMeeting", "pages/jobModule/doubleMeeting/mineDoubleMeet/mineDoubleMeet", "pages/jobModule/doubleMeeting/applySuccess/applySuccess", "pages/jobModule/jobBook/jobBook", "pages/jobModule/company/company", "pages/jobModule/preachMeeting/preachMeeting", "pages/jobModule/doubleMeeting/doubleMeeting", "pages/message/invitelist/invitelist", "pages/message/activityDetail/activityDetail", "pages/message/internshipnews/internshipnews", "pages/message/quetionnews/questionnews", "pages/message/praiseList/praiseList", "pages/message/commentList/commentList", "pages/message/applyprogress/applyprogress", "pages/message/noticelist/noticelist", "pages/message/schoolNotice/schoolNotice", "pages/message/schoolNoticeDetail/schoolNoticeDetail", "pages/message/systemActiveMsg/systemActiveMsg", "pages/message/systemActiveDetail/systemActiveDetail", "pages/message/jobMessage/jobMessage", "pages/message/jobMessage/jobNotice/jobNotice", "pages/message/newsdetail/newsdetail", "pages/message/imList/imList", "pages/message/questionnaireDetail/questionnaireDetail", "pages/message/groupList/GroupList", "pages/message/GroupPersonList/GroupPersonList", "pages/huzhouList/huzhouList", "pages/huzhouCityList/huzhouCityList", "pages/huzhouDetail/huzhouDetail", "pages/helpCenter/index/index", "pages/helpCenter/sendQuestion/sendQuestion", "pages/cityChannelMsg/cityMsgList/cityMsgList", "pages/cityChannelMsg/cityChannelMsg", "pages/huzhouLinkMe/shaoxinLinkMe/shaoxinLinkMe", "pages/huzhouLinkMe/huzhouLinkMe", "pages/huzhouSearch/huzhouSearch", "pages/huzhouSearchCompany/huzhouSearchCompany" ]
                }, {
                    root: "growUp",
                    name: "growUp",
                    pages: [ "pages/amap/workSignIn/workSignIn", "pages/dateRecord/monthlyRecord/monthlyRecord", "pages/dateRecord/weeklyRecord/weeklyRecord", "pages/dateRecord/dailyRecord/dailyRecord", "pages/home/homePage/index/index", "pages/home/addDynamic/addDynamic", "pages/home/addQuestion/addQuestion", "pages/home/addAnswer/addAnswer", "pages/home/homeSearch/homeSearch", "pages/home/topicCircle/topicCircle", "pages/home/dynamicDetail/dynamicDetail", "pages/home/sharingAlumni/sharingAlumni", "pages/home/sharingAlumniCircle/sharingAlumniCircle", "pages/home/questiondetail/questiondetail", "pages/home/questioninvitelist/questioninvitelist", "pages/home/answerdetail/answerdetail", "pages/home/informationdetail/informationdetail", "pages/home/homePage/personInfo/personInfo", "pages/home/activitydetail/activitydetail", "pages/home/sharingAlumniCircleLoading/sharingAlumniCircleLoading", "pages/home/lrregularities/lrregularities", "pages/home/messagedetail/messagedetail", "pages/journal/darftList/darftList", "pages/journal/dailyeditor/editor", "pages/journal/journalDetails/journalDetails", "pages/journal/journalList/journalList", "pages/journal/relativePlanList/relativePlanList", "pages/sign/sign/sign", "pages/sign/signstatistics/signstatistics", "pages/sign/diligentlist/diligentlist", "pages/sign/outsideSignIn/outsideSignIn", "pages/sign/commonproblem/commonproblem", "pages/sign/planList/planList", "pages/sign/signPlanList/signPlanList", "pages/enroll/enrolllist/enrolllist", "pages/enroll/enrollitem/index/index", "pages/enroll/enrollitem/addjob/addjob", "pages/enroll/enrollitem/navigation_bus/navigation", "pages/enroll/enrollitem/navigation_car/navigation", "pages/enroll/enrollitem/navigation_car_detail/navigation", "pages/enroll/enrollitem/navigation_ride/navigation", "pages/enroll/enrollitem/navigation_ride_detail/navigation", "pages/enroll/enrollitem/navigation_walk/navigation", "pages/enroll/enrollitem/navigation_walk_detail/navigation", "pages/enroll/enrollitem/jobdeails/jobdeails", "pages/enroll/enrollitem/enrolldetails/enrolldetails", "pages/enroll/enrollitem/enrolldetails1/enrolldetails", "pages/recommendJobs/recommendJobs", "pages/employmentReport/employmentReport", "pages/employmentReportDetail/employmentReportDetail", "pages/jobCategory/jobCategory" ]
                }, {
                    root: "videoBag",
                    name: "videoBag",
                    pages: [ "pages/preachMeeting/preachMeeting", "pages/collectedCareerTalk/collectedCareerTalk", "pages/incompleteResume/incompleteResume", "pages/login/login/login", "pages/login/baseInfo/index/index", "pages/login/baseInfo/indexNext/indexNext", "pages/login/baseInfo/myInterest/myInterest", "pages/customerservice/servicecenter/servicecenter", "pages/customerservice/feedback/feedback", "pages/customerservice/feedbackhistory/feedbackhistory", "pages/customerservice/problemdetails/problemdetails", "pages/doubleSelectList/doubleSelectList", "pages/doubleSelectList/detail/detail", "pages/mutualSelection/comRecruitmentList/comRecruitmentList", "pages/mutualSelection/mutualSelectionSearch/mutualSelectionSearch", "pages/h5/h5", "pages/jobintentionsetting/jobobjective/jobobjective", "pages/jobintentionsetting/jobstatus/jobstatus", "pages/jobintentionsetting/jobset/jobset", "pages/logs/logs", "pages/posdetail/posdetail", "pages/search/selectcity/selectcity", "pages/search/index/index", "pages/search/searchcompany/searchcompany", "pages/Chat/Chat", "pages/comdetail/comdetail", "pages/loading/loading", "pages/customerservice/cooperation/cooperation" ]
                }, {
                    root: "echartsBag",
                    name: "echartsBag",
                    pages: [ "pages/professionalDetail/professionalDetail", "pages/points/index/index", "pages/points/IntegralRule/IntegralRule", "pages/points/PointsMall/PointsMall", "pages/points/MyMallOrder/MyMallOrder", "pages/points/integralReport/integralReport", "pages/gradeidentification/gradeidentification/gradeidentification", "pages/gradeidentification/entryIdentification/entryIdentification", "pages/gradeidentification/selfknot/selfknot", "pages/gradeidentification/h5/h5", "pages/internshipEvaluation/selfEvaluation/selfEvaluation", "pages/internshipEvaluation/selfEvaluationView/selfEvaluationView", "pages/internshipschedule/internshipschedule", "pages/practiceReport/index/index", "pages/practiceReport/success/success", "pages/questionnaire/questionnairelist/questionnairelist", "pages/questionnaire/answerquestionnaire/answerquestionnaire", "pages/questionnaire/rquestionnaireview/rquestionnaireview", "pages/offWorkList/offWorkList", "pages/offWorkSelectTeacher/offWorkSelectTeacher", "pages/offWorkDetail/offWorkDetail", "pages/offwork/offwork", "pages/offwork/offworkPlanList/offworkPlanList", "pages/alumnis/allSubList/allSubList", "pages/alumnis/earnestList/earnestList", "pages/alumnis/index/index", "pages/alumnis/returnList/retutnList", "pages/agreement/commitAgreement/commitAgreement", "pages/agreement/commitAgreement/relCommitAgreement", "pages/agreement/viewAgreement/viewAgreement", "pages/DownloadExplain/DownloadExplain", "pages/informedConsent/commitInformedConsent/commitInformedConsent", "pages/informedConsent/viewInformedConsent/viewInformedConsent" ]
                }, {
                    root: "ninthBag",
                    name: "ninthBag",
                    pages: [ "pages/followWx/followWx", "pages/submitResultPage/submitResultPage", "pages/forgotPassword/forgotPassword", "pages/accountAppeal/accountAppeal", "pages/lookingForMyPush/lookingForMyPush", "pages/jobSearch/jobSearch", "education/creditList/creditList", "education/uploadImgInfo/uploadImgInfo", "education/imgInfoDetails/imgInfoDetails", "education/summaryDetails/summaryDetails", "education/uploadSummary/uploadSummary", "education/signInAddress/signInAddress", "education/signInRecord/signInRecord", "education/educationProjectList/educationProjectList", "education/educationProjectDetails/educationProjectDetails", "education/projectJoinDetails/projectJoinDetails", "pages/interaction/interaction", "pages/deliverSuccess/deliverSuccess", "pages/deliverInviteDetails/deliverInviteDetails", "pages/interviewInviteDetails/interviewInviteDetails", "pages/newUserGuide/newUserGuide", "pages/personJobPlace/personJobPlace", "pages/schoolRecomm/schoolRecomm", "pages/bangbangRecomm/bangbangRecomm", "pages/recommJobobjective/recommJobobjective" ]
                } ],
                window: {
                    backgroundTextStyle: "dark",
                    navigationBarBackgroundColor: "#ffffff",
                    navigationBarTitleText: "超级校招",
                    navigationBarTextStyle: "black",
                    onReachBottomDistance: 50
                },
                permission: {
                    "scope.userLocation": {
                        desc: "展示当前城市的职位或公司"
                    }
                },
                sitemapLocation: "sitemap.json",
                requiredPrivateInfos: [ "getLocation", "onLocationChange" ]
            }, E(t, e);
        }
        Object(n.setStore)(R), n.ReduxContext.Provider && (n.ReduxContext.Provider({
            store: R
        }), n.ReduxContext.Provider({
            store: R
        })), r = c()({
            onLaunch: function(e) {
                var t = this;
                l.a.App.init({
                    appID: "500668639",
                    eventID: "500668640",
                    lauchOpts: e,
                    statPullDownFresh: !0,
                    statShareApp: !0,
                    statReachBottom: !0
                });
                var n = s.a.getStorageSync("userid") || null, o = (s.a.getStorageSync("username"), 
                s.a.getStorageSync("password") || null), a = s.a.getStorageSync("logintype") || null;
                e = s.a.getStorageSync("loginerId") || null;
                "2" != a || o || !n || e || (s.a.removeStorageSync("openid"), s.a.removeStorageSync("unionid"), 
                s.a.removeStorageSync("userid"), s.a.removeStorageSync("username"), s.a.removeStorageSync("password"), 
                s.a.removeStorageSync("logintype"), s.a.removeStorageSync("sessionId")), s.a.getNetworkType({
                    success: function(e) {
                        e = e.networkType, s.a.setStorageSync("networkType", e = "unknown" == (e = "5g" == (e = "4g" == (e = "3g" == (e = "2g" == (e = "wifi" == e ? "WIFI" : e) ? "2G" : e) ? "3G" : e) ? "4G" : e) ? "5G" : e) ? "none" : e);
                    }
                });
                var i = this, r = this.globalData.baseUrl;
                s.a.request({
                    url: r + "behavior/Duration!getIp.action",
                    data: {},
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        e.data.data && s.a.setStorageSync("clientIP", e.data.data.ip);
                    },
                    fail: function(e) {
                        console.info(e);
                    }
                }), s.a.getSystemInfo({
                    success: function(e) {
                        var t = !!(e.system.toLowerCase().search("ios") + 1), n = R.getState().xybData;
                        n.statusBarHeight = e.statusBarHeight, n.screenHeight = e.screenHeight, n.screenWidth = e.screenWidth, 
                        (n.ios = t) && 44 <= e.statusBarHeight && (i.globalData.isIphoneX = !0), n.navHeight = !e.system || -1 < e.system.indexOf("iOS") ? 44 : 48, 
                        R.dispatch(Object(P.a)(n)), i.globalData.currentEnvironment = e.environment || "", 
                        s.a.setStorageSync("xcxCurrentEnvironment", i.globalData.currentEnvironment), s.a.setStorageSync("xcxSystemInfo", e);
                    }
                }), i.globalData.currentEnvironment && "wxwork" == i.globalData.currentEnvironment ? wx.qy.login({
                    success: function(e) {
                        e.code && s.a.request({
                            url: r + "login/LoginByQyWx!getQyUserId.action",
                            data: {
                                code: e.code
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                e.data.data && (s.a.setStorageSync("openid", e.data.data.deviceId), s.a.setStorageSync("sessionKey", e.data.data.sessionKey));
                            },
                            fail: function(e) {}
                        });
                    }
                }) : s.a.login({
                    success: function(e) {
                        e.code && s.a.request({
                            url: r + "common/getOpenId.action",
                            data: {
                                code: e.code
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                e.data.data && (s.a.setStorageSync("openid", e.data.data.openId), s.a.setStorageSync("sessionKey", e.data.data.sessionKey));
                            },
                            fail: function(e) {}
                        });
                    }
                }), s.a.getSetting({
                    success: function(e) {
                        e.authSetting["scope.userInfo"] && wx.getUserProfile({
                            lang: "zh_CN",
                            success: function(e) {
                                t.globalData.userInfo = e.userInfo, t.userInfoReadyCallback && t.userInfoReadyCallback(e);
                            }
                        });
                    }
                }), s.a.eventCenter.on("taroClick", function(e) {
                    p.a.taroClick(e);
                }), wx.setStorageSync("formPage", "pages/find/index/index"), wx.onAppRoute(function(e) {
                    var t = e.path, n = wx.getStorageSync("formPage"), o = wx.getStorageSync("formPage");
                    p.a.taroBrowseAndRead(e, o), t !== n && wx.setStorageSync("formPage", t);
                });
            },
            getIMHandler: function() {},
            onShow: function(e) {
                s.a.setStorageSync("xcxOnShowTime", new Date().getTime()), p.a.commonDataStatistics("start");
                var t = s.a.getStorageSync("sessionId") || null;
                this.globalData.isLogin = !!t;
                var n = this;
                this.connectSocket(), s.a.onSocketClose(function(e) {}), s.a.onSocketError(function(e) {
                    n.globalData.reConnect++, 3 < n.globalData.reConnect && (n.reConnectSocket(), n.globalData.reConnect = 0);
                }), s.a.onSocketOpen(function(e) {
                    n.jump();
                }), s.a.onSocketMessage(function(e) {
                    R.getState().xybData.getWebsocketCallBack(e);
                });
            },
            reConnectSocket: function() {
                Object(C.debounce)(function() {
                    this.connectSocket();
                }, 3e3, !1);
            },
            connectSocket: function() {
                s.a.connectSocket({
                    url: u.a.WEBSOCKETURL,
                    success: function() {},
                    fail: function(e) {}
                });
            },
            jump: function() {
                var e = this, t = this;
                this.globalData.timer = setTimeout(function() {
                    clearTimeout(e.globalData.timer), e.jump();
                    var n = s.a.getStorageSync("userid");
                    if ("" == n) return !1;
                    n = {
                        type: "link-ws",
                        fromId: n
                    }, e.globalData.xjhConversationId && (n.conversationId = e.globalData.xjhConversationId), 
                    s.a.sendSocketMessage({
                        data: JSON.stringify(n),
                        success: function(e) {},
                        fail: function(e) {
                            t.globalData.reConnect++, 3 < t.globalData.reConnect && (t.connectSocket(), t.globalData.reConnect = 0);
                        }
                    });
                }, 5e3);
            },
            onHide: function() {
                var e = new Date().getTime(), t = s.a.getStorageSync("xcxOnShowTime"), n = void 0;
                t && 0 < e - t && (n = parseInt((e - t) / 1e3)), p.a.commonDataStatistics("quit", "", "", n), 
                s.a.closeSocket(), clearTimeout(this.globalData.timer);
            },
            globalData: {
                baseUrl: u.a.HOST,
                websocketUrl: u.a.WEBSOCKETURL,
                apphttp: u.a.APPHTTP,
                htmlJump: u.a.HTMLJUMP,
                userInfo: null,
                header: {
                    Cookie: "",
                    "content-type": "application/x-www-form-urlencoded"
                },
                isLogin: !1,
                studentActivate: !1,
                sessionKey: "",
                sessionId: "",
                expectJobs: [],
                expectJobsTemp: [],
                expectCitys: [],
                searchcity: "",
                searchComparms: "",
                collectpostIndex: "",
                cancelCollect: !1,
                fromtest: !1,
                editresumeFlag: !1,
                editname: !1,
                addjob: {},
                userSchoolInfo: {},
                autoSign: !1,
                edit: {},
                growupType: 1,
                isAlumni: !1,
                alumniInfo: {},
                isIphoneX: !1,
                inputTxt: "",
                baseInfoTmpe: {},
                currentEnvironment: "",
                reConnect: 0,
                xjhConversationId: "",
                applyPostSort: "",
                periodFlag: !1,
                abnormalHide: !1,
                occupationType: null,
                timer: null,
                selectCityArray: null
            }
        })((function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + e(n));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(T, s.a.Component), r(T, [ {
            key: "_createData",
            value: function() {}
        } ]), c = T)) || c, c = r, App(o(0).default.createApp(r)), s.a.initPxTransform({
            designWidth: 750,
            deviceRatio: {
                640: 1.17,
                750: 1,
                828: .905
            }
        });
    },
    445: function(e, t, n) {
        function o(e) {
            var t;
            return "function" == typeof (e = e.Symbol) ? e.observable ? t = e.observable : (t = e("observable"), 
            e.observable = t) : t = "@@observable", t;
        }
        n.d(t, "a", function() {
            return o;
        });
    },
    449: function(e, t, n) {},
    451: function(e, t) {
        e.exports = function(e) {
            var t;
            return e.webpackPolyfill || ((t = Object.create(e)).children || (t.children = []), 
            Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l;
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i;
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1), t;
        };
    },
    49: function(e, t, n) {
        (function(e, o) {
            var a = n(445);
            o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : o, 
            o = Object(a.a)(o);
            t.a = o;
        }).call(this, n(37), n(451)(e));
    }
}, [ [ 1316, 0, 1, 2 ] ] ]);