<style>

    .property-featured {
        height: 200px;
        background-color: #cecece !important;
    }

    .card .card-header {
        padding: 15px 18px !important;
    }

    .card .card-body {
        padding: 15px 18px !important;
    }

    .edit-pencil {
        font-size: 20px !important;
        color: #353232 !important;
    }

    .pcolor {
        color: #813af5 !important;
    }

    .parab-0 p {
        margin-bottom: 1px;
    }

    .rating {
        color: #ffaf45;
        letter-spacing: 3px;
    }

    .page-wrapper.horizontal-wrapper:before {
        display: none;
    }

    @media only screen and (max-width: 575.98px) {
        .page-wrapper .nav-right .nav-menus {
            margin-right: 0 !important;
        }

        .profile-nav {
            margin-left: 10px;
        }
        .page-wrapper .page-header .header-wrapper .nav-right.right-header ul li .mode i {
           font-size: 20px!important;
        }
        .feather-search {
            width: 25px !important;
            height: 25px !important;
        }

        .feather-search {
            width: 25px !important;
            height: 25px !important;
        }

        .feather-bell {
            width: 20px !important;
            height: 20px !important;
        }

        .feather-shopping-cart {
            width: 20px !important;
            height: 20px !important;
        }

        .nav-right ul li i {
            font-size: 20px !important;
        }

        .feather-sliders {
            width: 20px !important;
            height: 20px !important;
        }

        .show-div.active{
            top: 80px;
            position: absolute;
            z-index: 8;
            background-color: white;
            transition: all linear 0.3s;
    }
    }
</style>
<template>
<!--    <div class="header-wrapper row m-0 p-3">-->
<!--        <form-->
<!--                class="form-inline search-full"-->
<!--                action="#"-->
<!--                method="get"-->
<!--                :class="{ open: searchOpen }"-->
<!--        >-->
<!--            <div class="form-group w-100">-->
<!--                <div class="Typeahead Typeahead&#45;&#45;twitterUsers">-->
<!--                    <div class="u-posRelative">-->
<!--                        <input-->
<!--                                class="demo-input Typeahead-input form-control-plaintext w-100"-->
<!--                                type="text"-->
<!--                                v-on:keyup="searchterm"-->
<!--                                v-model="terms"-->
<!--                                placeholder="Search.."-->
<!--                                name="q"-->
<!--                                title=""-->
<!--                                autofocus-->
<!--                        />-->
<!--                        <div class="spinner-border Typeahead-spinner" role="status">-->
<!--                            <span class="sr-only">Loading...</span>-->
<!--                        </div>-->
<!--                        <feather-->
<!--                                class="close-search"-->
<!--                                type="x"-->
<!--                                @click="search_close()"-->
<!--                        ></feather>-->
<!--                    </div>-->
<!--                    <div-->
<!--                            :class="searchResult ? 'Typeahead-menu is-open' : 'Typeahead-menu'"-->
<!--                            v-if="menuItems.length"-->
<!--                    >-->
<!--                        <div-->
<!--                                class="ProfileCard u-cf"-->
<!--                                v-for="(menuItem, index) in menuItems.slice(0, 8)"-->
<!--                                :key="index"-->
<!--                        >-->
<!--                            <div class="ProfileCard-avatar header-search">-->
<!--                                &lt;!&ndash; <feather :type="menuItem.icon"></feather> &ndash;&gt;-->
<!--                            </div>-->
<!--                            <div class="ProfileCard-details">-->
<!--                                <div class="ProfileCard-realName">-->
<!--                  <span @click="removeFix()"-->
<!--                  ><router-link-->
<!--                          :to="{ path: menuItem.path }"-->
<!--                          class="realname"-->
<!--                  >{{ menuItem.title }}</router-link-->
<!--                  ></span-->
<!--                  >-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div-->
<!--                            :class="-->
<!--              searchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu'-->
<!--            "-->
<!--                    >-->
<!--                        <div class="tt-dataset tt-dataset-0">-->
<!--                            <div class="EmptyMessage">-->
<!--                                Your search turned up 0 results. Opps There are no result found.-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </form>-->
<!--        <div class="header-logo-wrapper">-->
<!--            <div class="logo-wrapper">-->
<!--                <router-link to="/">-->
<!--                    <img class="img-fluid" src="../../assets/images/logo/yp1.png" alt="site Logo"/>-->
<!--                </router-link>-->
<!--            </div>-->
<!--        </div>-->
<!--        &lt;!&ndash;        <div class="left-header col horizontal-wrapper pl-0">&ndash;&gt;-->
<!--        &lt;!&ndash;            <ul class="horizontal-menu">&ndash;&gt;-->

<!--        &lt;!&ndash;                <li class="mega-menu outside">&ndash;&gt;-->
<!--        &lt;!&ndash;                    <a&ndash;&gt;-->
<!--        &lt;!&ndash;                            class="nav-link"&ndash;&gt;-->
<!--        &lt;!&ndash;                            :class="{ active: openbonusUI }"&ndash;&gt;-->
<!--        &lt;!&ndash;                            href="javascript:void(0);"&ndash;&gt;-->
<!--        &lt;!&ndash;                            @click="openmegamenu">&ndash;&gt;-->
<!--        &lt;!&ndash;                        <feather type="layers"></feather>&ndash;&gt;-->
<!--        &lt;!&ndash;                        <span>Bonus Ui</span>&ndash;&gt;-->
<!--        &lt;!&ndash;                    </a>&ndash;&gt;-->
<!--        &lt;!&ndash;                    <div&ndash;&gt;-->
<!--        &lt;!&ndash;                            class="mega-menu-container nav-submenu menu-to-be-close"&ndash;&gt;-->
<!--        &lt;!&ndash;                            :class="{ 'd-block': openbonusUI }"&ndash;&gt;-->
<!--        &lt;!&ndash;                    >&ndash;&gt;-->
<!--        &lt;!&ndash;                        <div class="container-fluid">&ndash;&gt;-->
<!--        &lt;!&ndash;                            <div class="row">&ndash;&gt;-->
<!--        &lt;!&ndash;                                <div&ndash;&gt;-->
<!--        &lt;!&ndash;                                        class="col mega-box"&ndash;&gt;-->
<!--        &lt;!&ndash;                                        v-for="(menuItem, index) in megamenuItems"&ndash;&gt;-->
<!--        &lt;!&ndash;                                        :key="index">&ndash;&gt;-->
<!--        &lt;!&ndash;                                    <div class="mobile-title d-none" v-if="index == 0">&ndash;&gt;-->
<!--        &lt;!&ndash;                                        <h5>Mega menu</h5>&ndash;&gt;-->
<!--        &lt;!&ndash;                                        <feather type="x" @click="closeBonusUI"></feather>&ndash;&gt;-->
<!--        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                                    <div class="link-section" :class="[menuItem.design, { active : menuItem.active }]">&ndash;&gt;-->
<!--        &lt;!&ndash;                                        <div>&ndash;&gt;-->
<!--        &lt;!&ndash;                                            <h6 @click="setNavActive(menuItem, index)">{{ menuItem.title }}</h6>&ndash;&gt;-->
<!--        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                                        <ul :class="{ open : menuItem.active }">&ndash;&gt;-->
<!--        &lt;!&ndash;                                            <li&ndash;&gt;-->
<!--        &lt;!&ndash;                                                    v-for="(childrenItem, index) in menuItem.children"&ndash;&gt;-->
<!--        &lt;!&ndash;                                                    :key="index"&ndash;&gt;-->
<!--        &lt;!&ndash;                                            >&ndash;&gt;-->
<!--        &lt;!&ndash;                                                <router-link :to="childrenItem.path">&ndash;&gt;-->
<!--        &lt;!&ndash;                                                    <feather&ndash;&gt;-->
<!--        &lt;!&ndash;                                                            :type="childrenItem.icon"&ndash;&gt;-->
<!--        &lt;!&ndash;                                                            v-if="childrenItem.icon"&ndash;&gt;-->
<!--        &lt;!&ndash;                                                    ></feather>&ndash;&gt;-->
<!--        &lt;!&ndash;                                                    {{ childrenItem.title }}&ndash;&gt;-->
<!--        &lt;!&ndash;                                                </router-link>&ndash;&gt;-->
<!--        &lt;!&ndash;                                            </li>&ndash;&gt;-->
<!--        &lt;!&ndash;                                        </ul>&ndash;&gt;-->
<!--        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                </li>&ndash;&gt;-->
<!--        &lt;!&ndash;                <li class="level-menu outside" @click="openlevelmenu">&ndash;&gt;-->
<!--        &lt;!&ndash;                    <a class="nav-link" href="#">&ndash;&gt;-->
<!--        &lt;!&ndash;                        <feather type="inbox"></feather>&ndash;&gt;-->
<!--        &lt;!&ndash;                        <span>Level Menu</span></a&ndash;&gt;-->
<!--        &lt;!&ndash;                    >&ndash;&gt;-->
<!--        &lt;!&ndash;                    <ul&ndash;&gt;-->
<!--        &lt;!&ndash;                            class="header-level-menu menu-to-be-close"&ndash;&gt;-->
<!--        &lt;!&ndash;                            :class="{ 'd-block': openLevelmenu }"&ndash;&gt;-->
<!--        &lt;!&ndash;                    >&ndash;&gt;-->
<!--        &lt;!&ndash;                        <li>&ndash;&gt;-->
<!--        &lt;!&ndash;                            <a href="file-manager.html" title="">&ndash;&gt;-->
<!--        &lt;!&ndash;                                <feather type="git-pull-request"></feather>&ndash;&gt;-->
<!--        &lt;!&ndash;                                <span>File manager </span></a&ndash;&gt;-->
<!--        &lt;!&ndash;                            >&ndash;&gt;-->
<!--        &lt;!&ndash;                        </li>&ndash;&gt;-->
<!--        &lt;!&ndash;                        <li>&ndash;&gt;-->
<!--        &lt;!&ndash;                            <a href="#!" title="">&ndash;&gt;-->
<!--        &lt;!&ndash;                                <feather type="users"></feather>&ndash;&gt;-->
<!--        &lt;!&ndash;                                <span>Users</span></a&ndash;&gt;-->
<!--        &lt;!&ndash;                            >&ndash;&gt;-->
<!--        &lt;!&ndash;                            <ul class="header-level-sub-menu">&ndash;&gt;-->
<!--        &lt;!&ndash;                                <li>&ndash;&gt;-->
<!--        &lt;!&ndash;                                    <a href="file-manager.html" title="">&ndash;&gt;-->
<!--        &lt;!&ndash;                                        <feather type="user"></feather>&ndash;&gt;-->
<!--        &lt;!&ndash;                                        <span>User Profile</span></a&ndash;&gt;-->
<!--        &lt;!&ndash;                                    >&ndash;&gt;-->
<!--        &lt;!&ndash;                                </li>&ndash;&gt;-->
<!--        &lt;!&ndash;                                <li>&ndash;&gt;-->
<!--        &lt;!&ndash;                                    <a href="file-manager.html" title="">&ndash;&gt;-->
<!--        &lt;!&ndash;                                        <feather type="user-minus"></feather>&ndash;&gt;-->
<!--        &lt;!&ndash;                                        <span>User Edit</span></a&ndash;&gt;-->
<!--        &lt;!&ndash;                                    >&ndash;&gt;-->
<!--        &lt;!&ndash;                                </li>&ndash;&gt;-->
<!--        &lt;!&ndash;                                <li>&ndash;&gt;-->
<!--        &lt;!&ndash;                                    <a href="file-manager.html" title="">&ndash;&gt;-->
<!--        &lt;!&ndash;                                        <feather type="user-check"></feather&ndash;&gt;-->
<!--        &lt;!&ndash;                                        >&ndash;&gt;-->
<!--        &lt;!&ndash;                                        <span>Users Cards</span></a&ndash;&gt;-->
<!--        &lt;!&ndash;                                    >&ndash;&gt;-->
<!--        &lt;!&ndash;                                </li>&ndash;&gt;-->
<!--        &lt;!&ndash;                            </ul>&ndash;&gt;-->
<!--        &lt;!&ndash;                        </li>&ndash;&gt;-->
<!--        &lt;!&ndash;                        <li>&ndash;&gt;-->
<!--        &lt;!&ndash;                            <a href="kanban.html" title="">&ndash;&gt;-->
<!--        &lt;!&ndash;                                <feather type="airplay"></feather>&ndash;&gt;-->
<!--        &lt;!&ndash;                                <span>Kanban Board</span></a&ndash;&gt;-->
<!--        &lt;!&ndash;                            >&ndash;&gt;-->
<!--        &lt;!&ndash;                        </li>&ndash;&gt;-->
<!--        &lt;!&ndash;                        <li>&ndash;&gt;-->
<!--        &lt;!&ndash;                            <a href="bookmark.html" title="">&ndash;&gt;-->
<!--        &lt;!&ndash;                                <feather type="heart"></feather>&ndash;&gt;-->
<!--        &lt;!&ndash;                                <span>Bookmark</span></a&ndash;&gt;-->
<!--        &lt;!&ndash;                            >&ndash;&gt;-->
<!--        &lt;!&ndash;                        </li>&ndash;&gt;-->
<!--        &lt;!&ndash;                        <li>&ndash;&gt;-->
<!--        &lt;!&ndash;                            <a href="social-app.html" title="">&ndash;&gt;-->
<!--        &lt;!&ndash;                                <feather type="zap"></feather>&ndash;&gt;-->
<!--        &lt;!&ndash;                                <span>Social App </span></a&ndash;&gt;-->
<!--        &lt;!&ndash;                            >&ndash;&gt;-->
<!--        &lt;!&ndash;                        </li>&ndash;&gt;-->
<!--        &lt;!&ndash;                    </ul>&ndash;&gt;-->
<!--        &lt;!&ndash;                </li>&ndash;&gt;-->
<!--        &lt;!&ndash;            </ul>&ndash;&gt;-->
<!--        &lt;!&ndash;        </div>&ndash;&gt;-->
<!--        <div class="left-header col horizontal-wrapper pl-0 d-none">-->
<!--            <ul class="horizontal-menu">-->
<!--                <li class="mega-menu outside">-->
<!--                    <a-->
<!--                            class="nav-link"-->
<!--                            :class="{ active: openbonusUI }"-->
<!--                            href="javascript:void(0);"-->
<!--                            @click="openmegamenu">-->
<!--                        <feather type="layers"></feather>-->
<!--                        <span>Bonus Ui</span>-->
<!--                    </a>-->
<!--                    <div-->
<!--                            class="mega-menu-container nav-submenu menu-to-be-close"-->
<!--                            :class="{ 'd-block': openbonusUI }"-->
<!--                    >-->
<!--                        <div class="container-fluid">-->
<!--                            <div class="row">-->
<!--                                <div-->
<!--                                        class="col mega-box"-->
<!--                                        v-for="(menuItem, index) in megamenuItems"-->
<!--                                        :key="index">-->
<!--                                    <div class="mobile-title d-none" v-if="index == 0">-->
<!--                                        <h5>Mega menu</h5>-->
<!--                                        <feather type="x" @click="closeBonusUI"></feather>-->
<!--                                    </div>-->
<!--                                    <div class="link-section" :class="[menuItem.design, { active : menuItem.active }]">-->
<!--                                        <div>-->
<!--                                            <h6 @click="setNavActive(menuItem, index)">{{ menuItem.title }}</h6>-->
<!--                                        </div>-->
<!--                                        <ul :class="{ open : menuItem.active }">-->
<!--                                            <li-->
<!--                                                    v-for="(childrenItem, index) in menuItem.children"-->
<!--                                                    :key="index"-->
<!--                                            >-->
<!--                                                <router-link :to="childrenItem.path">-->
<!--                                                    <feather-->
<!--                                                            :type="childrenItem.icon"-->
<!--                                                            v-if="childrenItem.icon"-->
<!--                                                    ></feather>-->
<!--                                                    {{ childrenItem.title }}-->
<!--                                                </router-link>-->
<!--                                            </li>-->
<!--                                        </ul>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <span class="name">Menu 2</span>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <span class="name">Menu 3</span>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </div>-->
<!--        <div class="nav-right col-7 col-sm-10 col-md-10 pull-right right-header p-0">-->
<!--            <ul class="nav-menus">-->
<!--                &lt;!&ndash;        <li class="language-nav">&ndash;&gt;-->
<!--                &lt;!&ndash;          <b-dropdown&ndash;&gt;-->
<!--                &lt;!&ndash;            id="langddm"&ndash;&gt;-->
<!--                &lt;!&ndash;            class="translate_wrapper ml-2"&ndash;&gt;-->
<!--                &lt;!&ndash;            variant="light"&ndash;&gt;-->
<!--                &lt;!&ndash;            size="sm"&ndash;&gt;-->
<!--                &lt;!&ndash;            toggle-class="language-button"&ndash;&gt;-->
<!--                &lt;!&ndash;          >&ndash;&gt;-->
<!--                &lt;!&ndash;            <template slot="button-content">&ndash;&gt;-->
<!--                &lt;!&ndash;              <i class="flag-icon" :class="langIcon"></i>&ndash;&gt;-->
<!--                &lt;!&ndash;              <span class="name">{{ $i18n.locale }}</span>&ndash;&gt;-->
<!--                &lt;!&ndash;            </template>&ndash;&gt;-->
<!--                &lt;!&ndash;            <b-dropdown-item&ndash;&gt;-->
<!--                &lt;!&ndash;              v-for="(l, index) in localeOptions"&ndash;&gt;-->
<!--                &lt;!&ndash;              :key="index"&ndash;&gt;-->
<!--                &lt;!&ndash;              @click="changeLocale(l)"&ndash;&gt;-->
<!--                &lt;!&ndash;              >&ndash;&gt;-->
<!--                &lt;!&ndash;              <i class="flag-icon" :class="l.icon"></i>&ndash;&gt;-->
<!--                &lt;!&ndash;              {{ l.name }}</b-dropdown-item&ndash;&gt;-->
<!--                &lt;!&ndash;            >&ndash;&gt;-->
<!--                &lt;!&ndash;          </b-dropdown>&ndash;&gt;-->
<!--                &lt;!&ndash;        </li>&ndash;&gt;-->
<!--                <li>-->
<!--          <span class="header-search"-->
<!--          ><feather type="search" @click="search_open()"></feather-->
<!--          ></span>-->
<!--                </li>-->
<!--                <li v-if="userName != null" class="onhover-dropdown">-->
<!--                    <div class="notification-box">-->
<!--                        <feather type="bell"></feather-->
<!--                        >-->
<!--                        <span class="badge badge-pill badge-secondary">1 </span>-->
<!--                    </div>-->
<!--                    <ul class="notification-dropdown onhover-show-div">-->
<!--                        <li>-->
<!--                            <feather type="bell"></feather>-->
<!--                            <h6 class="f-18 mb-0">Notitications</h6>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <p>-->
<!--                                <i class="fa fa-circle-o mr-3 font-primary"> </i>Delivery-->
<!--                                processing <span class="pull-right">10 min.</span>-->
<!--                            </p>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <a class="btn btn-primary" href="#">Check all notification</a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </li>-->
<!--                &lt;!&ndash; <li class="onhover-dropdown">-->
<!--                  <div class="notification-box"><feather type="star"></feather></div>-->
<!--                  <Bookmark />-->
<!--                </li> &ndash;&gt;-->
<!--                <li>-->
<!--                    <div class="mode">-->
<!--                        <i class="fa fa-moon-o mobileicon" v-show="mixLayout == 'light-only'"-->
<!--                           @click="customizeMixLayout('dark-only')"></i>-->
<!--                        <i class="fa fa-lightbulb-o mobileicon" v-show="mixLayout == 'dark-only'"-->
<!--                           @click="customizeMixLayout('light-only')"></i>-->
<!--                    </div>-->
<!--                </li>-->
<!--&lt;!&ndash;                <li class="cart-nav onhover-dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="cart-box">&ndash;&gt;-->
<!--&lt;!&ndash;                        <feather type="shopping-cart"></feather>&ndash;&gt;-->
<!--&lt;!&ndash;                        <span class="badge badge-pill badge-primary">2</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <ul class="cart-dropdown onhover-show-div">&ndash;&gt;-->
<!--&lt;!&ndash;                        <li>&ndash;&gt;-->
<!--&lt;!&ndash;                            <h6 class="mb-0 f-20">Shoping Bag</h6>&ndash;&gt;-->
<!--&lt;!&ndash;                            <feather type="shopping-cart"></feather>&ndash;&gt;-->
<!--&lt;!&ndash;                        </li>&ndash;&gt;-->
<!--&lt;!&ndash;                        <li class="mt-0">&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="media">&ndash;&gt;-->
<!--&lt;!&ndash;                                <img&ndash;&gt;-->
<!--&lt;!&ndash;                                        class="img-fluid rounded-circle mr-3 img-60"&ndash;&gt;-->
<!--&lt;!&ndash;                                        src="../../assets/images/ecommerce/01.jpg"&ndash;&gt;-->
<!--&lt;!&ndash;                                        alt=""&ndash;&gt;-->
<!--&lt;!&ndash;                                />&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="media-body">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <span>V-Neck Shawl Collar Woman's Solid T-Shirt</span>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <p>Yellow(#fcb102)</p>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="qty-box">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="input-group">&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="input-group-prepend">&ndash;&gt;-->
<!--&lt;!&ndash;                        <button&ndash;&gt;-->
<!--&lt;!&ndash;                                class="btn quantity-left-minus"&ndash;&gt;-->
<!--&lt;!&ndash;                                type="button"&ndash;&gt;-->
<!--&lt;!&ndash;                                data-type="minus"&ndash;&gt;-->
<!--&lt;!&ndash;                                data-field=""&ndash;&gt;-->
<!--&lt;!&ndash;                        >&ndash;&gt;-->
<!--&lt;!&ndash;                          <feather type="minus"></feather>&ndash;&gt;-->
<!--&lt;!&ndash;                        </button>&ndash;&gt;-->
<!--&lt;!&ndash;                      </span>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <input&ndash;&gt;-->
<!--&lt;!&ndash;                                                    class="form-control input-number"&ndash;&gt;-->
<!--&lt;!&ndash;                                                    type="text"&ndash;&gt;-->
<!--&lt;!&ndash;                                                    name="quantity"&ndash;&gt;-->
<!--&lt;!&ndash;                                                    value="1"&ndash;&gt;-->
<!--&lt;!&ndash;                                            /><span class="input-group-prepend">&ndash;&gt;-->
<!--&lt;!&ndash;                        <button&ndash;&gt;-->
<!--&lt;!&ndash;                                class="btn quantity-right-plus"&ndash;&gt;-->
<!--&lt;!&ndash;                                type="button"&ndash;&gt;-->
<!--&lt;!&ndash;                                data-type="plus"&ndash;&gt;-->
<!--&lt;!&ndash;                                data-field=""&ndash;&gt;-->
<!--&lt;!&ndash;                        >&ndash;&gt;-->
<!--&lt;!&ndash;                          <feather type="plus"></feather></button&ndash;&gt;-->
<!--&lt;!&ndash;                        ></span>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <h6 class="text-right text-muted">$299.00</h6>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="close-circle">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <a href="#">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <feather type="x"></feather>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </a>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                        </li>&ndash;&gt;-->
<!--&lt;!&ndash;                        <li class="mt-0">&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="media">&ndash;&gt;-->
<!--&lt;!&ndash;                                <img&ndash;&gt;-->
<!--&lt;!&ndash;                                        class="img-fluid rounded-circle mr-3 img-60"&ndash;&gt;-->
<!--&lt;!&ndash;                                        src="../../assets/images/ecommerce/03.jpg"&ndash;&gt;-->
<!--&lt;!&ndash;                                        alt=""&ndash;&gt;-->
<!--&lt;!&ndash;                                />&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="media-body">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <span>V-Neck Shawl Collar Woman's Solid T-Shirt</span>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <p>Yellow(#fcb102)</p>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="qty-box">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="input-group">&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="input-group-prepend">&ndash;&gt;-->
<!--&lt;!&ndash;                        <button&ndash;&gt;-->
<!--&lt;!&ndash;                                class="btn quantity-left-minus"&ndash;&gt;-->
<!--&lt;!&ndash;                                type="button"&ndash;&gt;-->
<!--&lt;!&ndash;                                data-type="minus"&ndash;&gt;-->
<!--&lt;!&ndash;                                data-field=""&ndash;&gt;-->
<!--&lt;!&ndash;                        >&ndash;&gt;-->
<!--&lt;!&ndash;                          <feather type="minus"></feather></button&ndash;&gt;-->
<!--&lt;!&ndash;                        ></span>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <input&ndash;&gt;-->
<!--&lt;!&ndash;                                                    class="form-control input-number"&ndash;&gt;-->
<!--&lt;!&ndash;                                                    type="text"&ndash;&gt;-->
<!--&lt;!&ndash;                                                    name="quantity"&ndash;&gt;-->
<!--&lt;!&ndash;                                                    value="1"&ndash;&gt;-->
<!--&lt;!&ndash;                                            /><span class="input-group-prepend">&ndash;&gt;-->
<!--&lt;!&ndash;                        <button&ndash;&gt;-->
<!--&lt;!&ndash;                                class="btn quantity-right-plus"&ndash;&gt;-->
<!--&lt;!&ndash;                                type="button"&ndash;&gt;-->
<!--&lt;!&ndash;                                data-type="plus"&ndash;&gt;-->
<!--&lt;!&ndash;                                data-field=""&ndash;&gt;-->
<!--&lt;!&ndash;                        >&ndash;&gt;-->
<!--&lt;!&ndash;                          <feather type="plus"></feather></button&ndash;&gt;-->
<!--&lt;!&ndash;                        ></span>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <h6 class="text-right text-muted">$299.00</h6>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="close-circle">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <a href="#">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <feather type="x"></feather>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </a>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                        </li>&ndash;&gt;-->
<!--&lt;!&ndash;                        <li>&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="total">&ndash;&gt;-->
<!--&lt;!&ndash;                                <h6 class="mb-2 mt-0 text-muted">&ndash;&gt;-->
<!--&lt;!&ndash;                                    Order Total : <span class="f-right f-20">$598.00</span>&ndash;&gt;-->
<!--&lt;!&ndash;                                </h6>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                        </li>&ndash;&gt;-->
<!--&lt;!&ndash;                        <li>&ndash;&gt;-->
<!--&lt;!&ndash;                            <router-link&ndash;&gt;-->
<!--&lt;!&ndash;                                    class="btn btn-block btn-primary view-cart"&ndash;&gt;-->
<!--&lt;!&ndash;                                    :to="'/ecommerce/cart'"&ndash;&gt;-->
<!--&lt;!&ndash;                            >&ndash;&gt;-->
<!--&lt;!&ndash;                                Go to shoping bag&ndash;&gt;-->
<!--&lt;!&ndash;                            </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;                            <router-link&ndash;&gt;-->
<!--&lt;!&ndash;                                    :to="'/ecommerce/checkout'"&ndash;&gt;-->
<!--&lt;!&ndash;                                    class="btn btn-block btn-secondary view-cart"&ndash;&gt;-->
<!--&lt;!&ndash;                            >&ndash;&gt;-->
<!--&lt;!&ndash;                                Checkout&ndash;&gt;-->
<!--&lt;!&ndash;                            </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;                        </li>&ndash;&gt;-->
<!--&lt;!&ndash;                    </ul>&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--                &lt;!&ndash;        <li class="onhover-dropdown">&ndash;&gt;-->
<!--                &lt;!&ndash;          <feather type="message-square"></feather>&ndash;&gt;-->
<!--                &lt;!&ndash;          <ul class="chat-dropdown onhover-show-div">&ndash;&gt;-->
<!--                &lt;!&ndash;            <li>&ndash;&gt;-->
<!--                &lt;!&ndash;              <feather type="message-square"></feather>&ndash;&gt;-->
<!--                &lt;!&ndash;              <h6 class="f-18 mb-0">Message Box</h6>&ndash;&gt;-->
<!--                &lt;!&ndash;            </li>&ndash;&gt;-->
<!--                &lt;!&ndash;            <li>&ndash;&gt;-->
<!--                &lt;!&ndash;              <div class="media">&ndash;&gt;-->
<!--                &lt;!&ndash;                <img&ndash;&gt;-->
<!--                &lt;!&ndash;                  class="img-fluid rounded-circle mr-3"&ndash;&gt;-->
<!--                &lt;!&ndash;                  src="../assets/images/user/1.jpg"&ndash;&gt;-->
<!--                &lt;!&ndash;                  alt=""&ndash;&gt;-->
<!--                &lt;!&ndash;                />&ndash;&gt;-->
<!--                &lt;!&ndash;                <div class="status-circle online"></div>&ndash;&gt;-->
<!--                &lt;!&ndash;                <div class="media-body">&ndash;&gt;-->
<!--                &lt;!&ndash;                  <span>Erica Hughes</span>&ndash;&gt;-->
<!--                &lt;!&ndash;                  <p>Lorem Ipsum is simply dummy...</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                <p class="f-12 font-success">58 mins ago</p>&ndash;&gt;-->
<!--                &lt;!&ndash;              </div>&ndash;&gt;-->
<!--                &lt;!&ndash;            </li>&ndash;&gt;-->
<!--                &lt;!&ndash;            <li>&ndash;&gt;-->
<!--                &lt;!&ndash;              <div class="media">&ndash;&gt;-->
<!--                &lt;!&ndash;                <img&ndash;&gt;-->
<!--                &lt;!&ndash;                  class="img-fluid rounded-circle mr-3"&ndash;&gt;-->
<!--                &lt;!&ndash;                  src="../assets/images/user/2.jpg"&ndash;&gt;-->
<!--                &lt;!&ndash;                  alt=""&ndash;&gt;-->
<!--                &lt;!&ndash;                />&ndash;&gt;-->
<!--                &lt;!&ndash;                <div class="status-circle online"></div>&ndash;&gt;-->
<!--                &lt;!&ndash;                <div class="media-body">&ndash;&gt;-->
<!--                &lt;!&ndash;                  <span>Kori Thomas</span>&ndash;&gt;-->
<!--                &lt;!&ndash;                  <p>Lorem Ipsum is simply dummy...</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                <p class="f-12 font-success">1 hr ago</p>&ndash;&gt;-->
<!--                &lt;!&ndash;              </div>&ndash;&gt;-->
<!--                &lt;!&ndash;            </li>&ndash;&gt;-->
<!--                &lt;!&ndash;            <li>&ndash;&gt;-->
<!--                &lt;!&ndash;              <div class="media">&ndash;&gt;-->
<!--                &lt;!&ndash;                <img&ndash;&gt;-->
<!--                &lt;!&ndash;                  class="img-fluid rounded-circle mr-3"&ndash;&gt;-->
<!--                &lt;!&ndash;                  src="../assets/images/user/4.jpg"&ndash;&gt;-->
<!--                &lt;!&ndash;                  alt=""&ndash;&gt;-->
<!--                &lt;!&ndash;                />&ndash;&gt;-->
<!--                &lt;!&ndash;                <div class="status-circle offline"></div>&ndash;&gt;-->
<!--                &lt;!&ndash;                <div class="media-body">&ndash;&gt;-->
<!--                &lt;!&ndash;                  <span>Ain Chavez</span>&ndash;&gt;-->
<!--                &lt;!&ndash;                  <p>Lorem Ipsum is simply dummy...</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                <p class="f-12 font-danger">32 mins ago</p>&ndash;&gt;-->
<!--                &lt;!&ndash;              </div>&ndash;&gt;-->
<!--                &lt;!&ndash;            </li>&ndash;&gt;-->
<!--                &lt;!&ndash;            <li class="text-center">&ndash;&gt;-->
<!--                &lt;!&ndash;              <a class="btn btn-primary" href="#">View All </a>&ndash;&gt;-->
<!--                &lt;!&ndash;            </li>&ndash;&gt;-->
<!--                &lt;!&ndash;          </ul>&ndash;&gt;-->
<!--                &lt;!&ndash;        </li>&ndash;&gt;-->
<!--                &lt;!&ndash;        <li v-if="userName != null" class="maximize">&ndash;&gt;-->
<!--                &lt;!&ndash;          <a&ndash;&gt;-->
<!--                &lt;!&ndash;            class="text-dark"&ndash;&gt;-->
<!--                &lt;!&ndash;            href="javascript:void(0)"&ndash;&gt;-->
<!--                &lt;!&ndash;            @click="toggle_fullscreen()"&ndash;&gt;-->
<!--                &lt;!&ndash;          >&ndash;&gt;-->
<!--                &lt;!&ndash;            <feather type="maximize"></feather&ndash;&gt;-->
<!--                &lt;!&ndash;          ></a>&ndash;&gt;-->
<!--                &lt;!&ndash;        </li>&ndash;&gt;-->
<!--                <li class="profile-nav p-0 mr-0" :class="{'onhover-dropdown': isMobile,}" style="display: block!important;">-->
<!--                    <div class="media profile-media" @click="isMobile ? openProfile=!openProfile:null">-->
<!--                        <img-->
<!--                                class="b-r-10"-->
<!--                                src="../../assets/images/dashboard/profile.jpg"-->
<!--                                alt=""-->
<!--                        />-->
<!--                        <div v-if="userName != null" class="media-body">-->
<!--                            <span v-text="userName != null ? userName:''">User</span>-->
<!--                            <p class="mb-0 font-roboto">-->
<!--                                <span v-text="userRole != null ? userRole.toUpperCase(): ''" class="mr-2"></span> <i-->
<!--                                    style="margin-top: 0px!important;" class="middle fa fa-angle-down"></i>-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <ul v-if="userName == null" class="profile-dropdown" :class="{-->
<!--                        active: isMobile ? true : openProfile,-->
<!--                        'd-none': !openProfile,-->
<!--                        'show-div': !isMobile,-->
<!--                        'onhover-show-div': isMobile-->
<!--                    }" >-->
<!--                        <li>-->
<!--                            <a @click="$router.push({path: 'login'})"-->
<!--                            >-->
<!--                                <feather type="user"></feather>-->
<!--                                <span>Login </span></a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                    <ul v-else class="profile-dropdown" :class="{-->
<!--                        active: isMobile ? true : openProfile,-->
<!--                        'd-none': !openProfile,-->
<!--                        'show-div': !isMobile,-->
<!--                        'onhover-show-div': isMobile-->
<!--                    }">-->
<!--                        <li>-->
<!--                            <a @click="$router.push({path: 'account'})"-->
<!--                            >-->
<!--                                <feather type="user"></feather>-->
<!--                                <span>Account </span></a-->
<!--                            >-->
<!--                        </li>-->
<!--                        &lt;!&ndash; <li>-->
<!--                          <a href="#"-->
<!--                            ><feather type="file-text"></feather><span>Taskboard</span></a-->
<!--                          >-->
<!--                        </li> &ndash;&gt;-->
<!--                        <li>-->
<!--                            <a href="#">-->
<!--                                <feather type="settings"></feather>-->
<!--                                <span>Settings</span></a>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <a @click="logout">-->
<!--                                <feather type="log-in"></feather>-->
<!--                                <span>Log out</span></a-->
<!--                            >-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </li>-->

<!--                <li style="margin-left: 10px;" :class="{-->
<!--                    'd-none': isMobile-->
<!--                }">-->
<!--                    <div class="toggle-sidebar" style="display:block!important;position: initial!important;"-->
<!--                         @click="toggle_sidebar">-->
<!--                        <feather-->
<!--                                class="status_toggle middle sidebar-toggle float-left"-->
<!--                                type="sliders"-->
<!--                                id="sidebar-toggle"-->
<!--                        ></feather>-->
<!--                    </div>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </div>-->
<!--        <script class="result-template" type="text/x-handlebars-template">-->
<!--            <div class="ProfileCard u-cf">-->
<!--                <div class="ProfileCard-avatar">-->
<!--                    <svg-->
<!--                            xmlns="http://www.w3.org/2000/svg"-->
<!--                            width="24"-->
<!--                            height="24"-->
<!--                            viewBox="0 0 24 24"-->
<!--                            fill="none"-->
<!--                            stroke="currentColor"-->
<!--                            stroke-width="2"-->
<!--                            stroke-linecap="round"-->
<!--                            stroke-linejoin="round"-->
<!--                            class="feather feather-airplay m-0"-->
<!--                    >-->
<!--                        <path-->
<!--                                d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"-->
<!--                        ></path>-->
<!--                        <polygon points="12 15 17 21 7 21 12 15"></polygon>-->
<!--                    </svg>-->
<!--                </div>-->
<!--                <div class="ProfileCard-details">-->
<!--                    <div class="ProfileCard-realName">-->
<!--                        name-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </script>-->
<!--        <script class="empty-template" type="text/x-handlebars-template">-->
<!--            <div class="EmptyMessage">-->
<!--                Your search turned up 0 results. This most likely means the backend is down, yikes!-->
<!--            </div>-->
<!--        </script>-->
<!--    </div>-->
<div>
    <section id="top-bar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 d-none d-sm-block">
                    <ul class="float-list">
                        <li><a href="#" ><i class="fa fa-phone-alt"></i> +91 8745214587</a></li>
                        <li><a href="#"><i class="fa fa-envelope"></i> contact@yogprerna.com</a></li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul class="float-list float-right">
                        <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram-square"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest-square"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li  class="ml-3">
                            <select name="" class="price-selecter  price-dropdown">
                                <option value="$">$</option>
                                <option value="₹">₹</option>
                            </select>
                        </li>
                        <li class="ml-3">
                            <router-link class="nav-link" :to="{ name: 'Login'}">user <i class="fa fa-user"></i></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="menu-bar">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <a class="navbar-brand" href="#"><img src="../../assets-front/images/logo.png" width="110px" alt="Yogprerna"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{ name: 'landing'}">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: ''}">Blogs</router-link>
                    </li>
<!--                    <li class="nav-item">-->
<!--                        <router-link class="nav-link" :to="{ name: 'search'}">Search</router-link>-->
<!--                    </li>-->
                    <!-- <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li> -->

                </ul>
                <span class="form-inline my-2 my-lg-0">
            <a href="#" class="btn site-btn-1">
<!--                <ion-icon name="add-circle" class="site-icon"></ion-icon>-->
                Add Listing </a>
          </span>
                <b-button variant="success" class="seo-button p-0 px-2 m-0" @click="selectProperty(data)" v-if="this.$route.name == 'propertyDetail' || loggedIn">
                    <i class="fa fa-lightbulb-o" style="font-size: 20px;font-size: 20px;padding: 7px;"></i>
                </b-button>
            </div>
        </nav>
    </section>
</div>
</template>
<!--<script src="https://kit.fontawesome.com/0bee4dcff2.js" crossorigin="anonymous"></script>-->
<script>
    import axios from "axios";

    var body = document.getElementsByTagName("body")[0];
    import {mapState, mapActions} from "vuex";
    // import firebase from "firebase";
    // import UserAuth from "../auth/js/index";
    import {localeOptions} from "../../constants/config";
    import apiUrls from "../../_helpers/apiUrls";
    // import app from "../main";
    // import Bookmark from "./bookmark";
    export default {
        name: "Search",
        data() {
            return {
                data: {},
                terms: "",
                searchOpen: false,
                openProfile: false,
                searchResult: false,
                searchResultEmpty: false,
                close_sidebar_var: false,
                clicked: false,
                mobile_toggle: false,
                mobile_search: false,
                openbonusUI: false,
                openLevelmenu: false,
                openlanguage: false,
                mobile_accordian: false,
                userName: "Name",
                userRole: "",
                localeOptions,
                mixLayout: "light-only",
                langIcon: localStorage.getItem('currentLanguageIcon') || 'flag-icon-us'
            };
        },
        components: {},
        computed: {
            ...mapState({
                menuItems: (state) => state.menu.searchData,
                megamenuItems: (state) => state.menu.megamenu,
                loggedIn: (state) => state.userToken
            }),
        },
        methods: {
            selectProperty(data) {
                this.$store.commit('setProperty', data)
                this.$router.push({path:'/admin/dashboard'})
            },
            getDetail() {
                axios.post(apiUrls.getPropertyDetail, {
                    'slug': this.$route.params.slug,
                    'city': this.$route.params.city,
                }).then((res) => {
                    this.data = res.data[0]
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
            },
            isMobile() {
               return screen.width <= 760
            },
            getUser() {
                this.userName = this.$store.getters.getName
                this.userRole = this.$store.getters.getRole
            },
            toggle_sidebar() {
                this.$store.dispatch("menu/opensidebar");
            },
            setNavActive(item) {
                this.$store.dispatch("menu/setBonusNavActive", item);
            },
            ...mapActions(["setLang"]),
            openlangpicker() {
                this.openlanguage = !this.openlanguage;
            },
            openlevelmenu() {
                this.openLevelmenu = !this.openLevelmenu;
            },
            openmegamenu() {
                this.openbonusUI = !this.openbonusUI;
            },
            closeBonusUI() {
                this.openbonusUI = false;
            },
            search_open() {
                this.searchOpen = true;
            },
            search_close() {
                this.searchOpen = false;
            },
            searchterm: function () {
                this.$store.dispatch("menu/searchTerm", this.terms);
            },
            changeLocale(locale) {
                this.setLang(locale);
            },
            mobileaccordian() {
                this.mobile_accordian = !this.mobile_accordian;
            },
            logout: function () {
                this.$store.commit('logoutUser')
                this.$store.commit('removeProperty')
                this.$router.replace('/auth/login')
            },
            addFix() {
                body.classList.add("offcanvas");
                this.searchResult = true;
            },
            removeFix() {
                body.classList.remove("offcanvas");
                this.searchResult = false;
                this.terms = "";
            },
            toggle_fullscreen() {
                if (
                    (document.fullScreenElement && document.fullScreenElement !== null) ||
                    (!document.mozFullScreen && !document.webkitIsFullScreen)
                ) {
                    if (document.documentElement.requestFullScreen) {
                        document.documentElement.requestFullScreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullScreen) {
                        document.documentElement.webkitRequestFullScreen(
                            Element.ALLOW_KEYBOARD_INPUT
                        );
                    }
                } else {
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            },
            customizeMixLayout(val) {
                this.mixLayout = val;
                this.$store.dispatch("layout/setLayout", val);
            },
        },
        watch: {
            "$i18n.locale"(to, from) {
                if (from !== to) {
                    this.$router.go(this.$route.path);
                }
            },
            menuItems: function () {
                this.terms ? this.addFix() : this.removeFix();
                if (!this.menuItems.length) this.searchResultEmpty = true;
                else this.searchResultEmpty = false;
            },
        },
        beforeMount() {
            this.getUser()
            this.getDetail()
        }
    };
</script>
<style scoped>
    @import "../../../src/assets-front/css/style.css";
    .seo-button{
        position: fixed;
        right: 0;
        top: 0;
    }
    .nav-item a{
        color: black!important;
    }
    .btn {
      box-shadow: 0 3px 5px 0 #2f55d44d; }
</style>
