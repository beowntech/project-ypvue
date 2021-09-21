import Vue from 'vue'
import Router from "vue-router";
// import firebase from 'firebase';
// import Userauth from '../auth/js/index'

import Body from '../components/body'
import FrontBody from '../components/front/Body'
import Auth from '../auth/auth'

// import { AclRule } from 'vue-acl'

/* Auth */
import login from '../auth/login'
import callback from '../pages/callback'
import Register from '../auth/register'

/* FAQ */
import Faq from '../pages/faq'

/* Support Ticket */
import Support from '../pages/support'

/* maintenance */
import Maintenance from '../pages/maintenance'

/* Error Pages */
import Error400 from '../errors/error_400'
import Error401 from '../errors/error_401'
import Error403 from '../errors/error_403'
import Error404 from '../errors/error_404'
import Error500 from '../errors/error_500'
import Error503 from '../errors/error_503'

/* comingsoon */
import ComingsoonSimple from '../pages/comingsoon/comingsoon_simple'
import ComingsoonImage from '../pages/comingsoon/comingsoon_image'
import ComingsoonVideo from '../pages/comingsoon/comingsoon_video'

/* Dashboards */
import Default from '../pages/dashboard/default'
// import Ecommerce from '../pages/dashboard/ecommerce'

/* Widgets */
import GeneralWidgets from '../pages/widgets/general_widgets'
import ChartWidgets from '../pages/widgets/chart_widgets'

/* projects */
import projectlist from '../pages/project/project-list'
import createproject from '../pages/project/create-project'

/* uikits */
import alert from '../pages/uikits/alert'
import Statecolor from '../pages/uikits/state_color'
import Helperclasses from '../pages/uikits/helper_classes'
import Avatars from '../pages/uikits/avatars'
import Grid from '../pages/uikits/grid'
import Tagpills from '../pages/uikits/tag_pills'
import Typography from '../pages/uikits/typography'
import Progressbar from '../pages/uikits/progress_bar'
import Modal from '../pages/uikits/modal'
import Popover from '../pages/uikits/popover'
import Tooltip from '../pages/uikits/tooltip'
import Spinners from '../pages/uikits/loader'
import Dropdown from '../pages/uikits/dropdown'
import Accordion from '../pages/uikits/accordion'
import Boxshadow from '../pages/uikits/box_shadow'
import Lists from '../pages/uikits/lists'
/* advance */
import Scrollable from '../pages/advance/scrollable'
import Sweetalert from '../pages/advance/sweetalert'
import Tree from '../pages/advance/tree'
import Rating from '../pages/advance/rating'
import Pagination from '../pages/advance/pagination'
import Ribbons from '../pages/advance/ribbons'
import Tour from '../pages/advance/tour'
import Rangeslider from '../pages/advance/range_slider'
import Breadcrumb from '../pages/advance/breadcrumb'
import Dropzone from '../pages/advance/dropzone'
import Upload from '../pages/advance/upload'
import Sticky from '../pages/advance/sticky'
import Toastr from '../pages/advance/toastr'
import ImageCropper from '../pages/advance/image_cropper'
import Draganddrop from '../pages/advance/draganddrop'
/* charts */
import GoogleChart from '../pages/charts/google_chart'
import Chartjs from '../pages/charts/chartjs'
import Chartist from '../pages/charts/chartist'
/* icons */
import Flag from '../pages/icons/flag'
import Ico from '../pages/icons/ico_icon'
import Themify from '../pages/icons/themify_icon'
import Fontawesome from '../pages/icons/font_awesome'
import FeatherIcon from '../pages/icons/feather_icon'
import WhetherIcon from '../pages/icons/weather'

/* Buttons */
import Default_buttons from '../pages/buttons/default_buttons'
import Flat_buttons from '../pages/buttons/flat_buttons'
import Edge_buttons from '../pages/buttons/edge_buttons'
import Raised_buttons from '../pages/buttons/raised_buttons'
import Group_buttons from '../pages/buttons/group_buttons'
/* Form */
import FormWizrd from '../pages/forms/form_wizard'
import FormValidation from '../pages/forms/form_validation'
import FormBaseInputs from '../pages/forms/form_base_inputs'
import FormCheckboxRadio from '../pages/forms/form_checkbox_radio'
import FormInputGroups from '../pages/forms/form_input_groups'
import FormMegaOptions from '../pages/forms/form_mega_options'
/* Form Widgets */
import FormDatepicker from '../pages/form_widgets/datepicker'
import FormSelect2 from '../pages/form_widgets/select2'
import FormSwitch from '../pages/form_widgets/switch'
import FormTypeahead from '../pages/form_widgets/typeahead'
import FormClipboard from '../pages/form_widgets/clipboard'
import FormTouchspin from '../pages/form_widgets/touchspin'
/* E-Commerce */
import Products from '../pages/ecommerce/products'
import ProductDetails from '../pages/ecommerce/product_details'
import Cart from '../pages/ecommerce/cart'
import Wishlist from '../pages/ecommerce/wishlist'
import Checkout from '../pages/ecommerce/checkout'
import Invoice from '../pages/ecommerce/invoice'
import Success from '../pages/ecommerce/success'
import OrderHistory from '../pages/ecommerce/order_history'
import PaymentDetails from '../pages/ecommerce/payment_details'
/* Chat */
import Chat from '../pages/chat/chat'
import Videochat from '../pages/chat/videochat'
/* Email  */
import Email from '../pages/email/app'
/* File Manager  */
import FileManager from '../pages/filemanager'
/* Kanban board */
import Kanban from '../pages/kanban'
/* Cards */
import Basic from '../pages/cards/basic'
import Creative from '../pages/cards/creative'
import Tabbed from '../pages/cards/tabbed'
import Draggable from '../pages/cards/draggable'

/* pricing */
import Pricing from '../pages/pricing/pricing'
/* sample page */
import SamplePage from '../pages/sample_page'
import Todo from '../pages/todo/todo'
import FirebaseTodo from '../pages/todo/firebase_todo'
/* bootstrap tables */
import BootstrapBasic from '../pages/tables/bootstrap/basic'
import BootstrapSizing from '../pages/tables/bootstrap/sizing'
import BootstrapBorder from '../pages/tables/bootstrap/border'
import BootstrapStyling from '../pages/tables/bootstrap/styling'
/* datatable tables */
import DatatableBasic from '../pages/tables/datatable/basic_init'
import DatatableSelectDelete from '../pages/tables/datatable/select_delete'
import FilterTable from '../pages/tables/datatable/filter'
import DatatableExport from '../pages/tables/datatable/data_export'
/* Bookmark */
import Bookmark from '../pages/bookmark'
/* calendar */
import Calendar from '../pages/calendar/fullcalendar'
/* Timeline */
import TimelineOne from '../pages/timeline/timeline_one'

/* vuejs smart table */
import SmartTable from '../pages/tables/vuejs_smart_table/basic'

/* Editor */
import SimpleEditor from '../pages/editor/simple_editor'
import CkEditor from '../pages/editor/ckeditor.vue'


/* User Profile */
import UserProfile from '../pages/users/profile'
import UserEditProfile from '../pages/users/edit-profile'
import UserCards from '../pages/users/cards'

/* Blogs */
import Blog from '../pages/blogs/blog'
import BlogSingle from '../pages/blogs/blog_single'

/* Maps */
import GoogleMaps from '../pages/maps/vue_google_maps'
import VueLeaflet from '../pages/maps/vue_leaflet'

/* Job Search */
import JobList from '../pages/job/job_list'
import JobDetails from '../pages/job/job_details'
import JobApply from '../pages/job/job_apply'

/* Search */
import Search from '../pages/search'

/* Social App */
import Social from '../pages/social_app'

/* Authentication */
import LoginOne from '../pages/authentication/login_one'
import LoginTwo from '../pages/authentication/login_two'
import LoginValidate from '../pages/authentication/login_with_validation'
import RegisterImage from '../pages/authentication/register_image'
import RegisterImage2 from '../pages/authentication/register_image2'
import Unlock from '../pages/authentication/unlock'
import ForgetPassword from '../pages/authentication/forget_password'
import ResetPassword from '../pages/authentication/reset_password'

/* Learning */
import Learninglist from '../pages/learning/learninglist';
import Coursedetailed from '../pages/learning/coursedetailed';

import {store} from "../store";

/* knowledgebase */
import Knowledgebase from '../pages/knowledgebase/knowledgebase';

//Course
import TempCourse from '../pages/site/temp_course/index'
import TempCourseUpdate from '../pages/site/temp_course/update'

import Certificates from '../pages/site/certificates/index'

import OfferPage from '../pages/site/offer/index'

import Categories from '../pages/site/categories/index'

import Hiring from '../pages/site/features/hiring/index'

import Landing from '../front/index'
import FrontSearch from '../front/search'
import FrontDetail from '../front/detail'

import Seo from '../pages/site/seo/index'

// Gallery
import GridGallery from '../pages/gallery/grid-gallery';
import GridGalleryDesc from '../pages/gallery/gallery-desc';
import GalleryMasonary from '../pages/gallery/masonary-gallery';
import GalleryMasonaryDesc from '../pages/gallery/masonary-desc';
import HoverEffect from '../pages/gallery/hover-effect';

// custom website url 
import InfoPage from '../pages/site/info/index';
import ReviewPage from '../pages/site/review/index';
import MediaPage from '../pages/site/media/index';
import CoursePage from '../pages/site/course/index';
import CourseUpdatePage from '../pages/site/course/update';
import TeacherPage from '../pages/site/teacher/index';
import SettingPage from '../pages/site/setting/index';
import KeywordPage from '../pages/site/keyword/index';
import SupportPage from '../pages/site/support/index';
import PropertyPage from '../pages/site/properties/index';
import AccountPage from '../pages/site/account/index';
// component

Vue.use(Router)

const routes = [
    {path: '', redirect: {name: 'landing'}, meta: {rule: 'public'}},
    {
        path: '/info',
        name: 'Info',
        component: InfoPage,
        meta: {
            rule: 'public',
            title: 'Info | Admin Template',
        }
    },
    {
        path: '/',
        component: FrontBody,
        meta: {
            rule: 'public',
            requiresAuth: false
        },
        children: [
            {
                path: '/',
                name: 'landing',
                component: Landing,
                meta: {
                    rule: 'public',
                    title: 'Landing',
                }
            },
            {
                path: 'search',
                name: 'search',
                component: FrontSearch,
                meta: {
                    rule: 'public',
                    title: 'Search',
                }
            },
            {
                path: 'yoga-in-:city/:slug',
                name: 'propertyDetail',
                component: FrontDetail,
                meta: {
                    rule: 'public',
                    title: 'Detail',
                }
            },
        ]
    },
    {
        path: '/admin',
        component: Body,
        meta: {
            rule: 'dashboard',
            requiresAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: Default,
                meta: {
                    rule: 'dashboard',
                    title: 'Default Dashboard | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'properties',
                name: 'Properties',
                component: PropertyPage,
                meta: {
                    rule: 'multiple',
                    title: 'All Properties | Admin Template',
                }
            },
            {
                path: 'property/info',
                name: 'Info',
                component: InfoPage,
                meta: {
                    rule: 'multiple',
                    title: 'Info | Admin Template',
                }
            },
            {
                path: 'property/course',
                name: 'Course',
                component: CoursePage,
                meta: {
                    rule: 'multiple',
                    title: 'Course | Admin Template',
                }
            },
            {
                path: 'property/course/update/:courseId',
                name: 'Update Course',
                component: CourseUpdatePage,
                meta: {
                    rule: 'multiple',
                    title: 'Update Course | Admin Template',
                }
            },
            {
                path: 'property/media',
                name: 'Media',
                component: MediaPage,
                meta: {
                    rule: 'multiple',
                    title: 'Media | Admin Template',
                }
            },
            {
                path: 'property/seo',
                name: 'SEO',
                component: Seo,
                meta: {
                    rule: 'multiple',
                    title: 'SEO | Admin Template',
                }
            },
            {
                path: 'property/review',
                name: 'Review',
                component: ReviewPage,
                meta: {
                    rule: 'multiple',
                    title: 'Review | Admin Template',
                }
            },
            {
                path: 'property/yoga-guru',
                name: 'Teacher',
                component: TeacherPage,
                meta: {
                    rule: 'multiple',
                    title: 'yoga guru | Admin Template',
                }
            },
            {
                path: 'settings',
                name: 'Setting',
                component: SettingPage,
                meta: {
                    rule: 'multiple',
                    title: 'Setting | Admin Template',
                }
            },
            {
                path: 'keywords',
                name: 'Keywords',
                component: KeywordPage,
                meta: {
                    rule: 'multiple',
                    title: 'Keyword | Admin Template',
                }
            },
            {
                path: 'support',
                name: 'Support',
                component: SupportPage,
                meta: {
                    rule: 'multiple',
                    title: 'Support | Admin Template',
                }
            },
            {
                path: 'account',
                name: 'Account',
                component: AccountPage,
                meta: {
                    rule: 'multiple',
                    title: 'Account | Admin Template',
                }
            },
        ]
    },
    {
        path: '/categories',
        component: Body,
        children: [
            {
                path: 'list',
                name: 'Category',
                component: Categories,
                meta: {
                    rule: 'editor',
                    title: 'Category | Admin Template',
                }
            },
        ]
    },
    {
        path: '/courses',
        component: Body,
        children: [
            {
                path: 'temp/add',
                name: 'Temp Course',
                component: TempCourse,
                meta: {
                    rule: 'editor',
                    title: 'Temp Course | Admin Template',
                }
            },
            {
                path: 'temp/update/:courseId',
                name: 'Temp Course',
                component: TempCourseUpdate,
                meta: {
                    rule: 'editor',
                    title: 'Temp Course Update | Admin Template',
                }
            },
        ]
    },
    {
        path: '/certificates',
        component: Body,
        children: [
            {
                path: 'add',
                name: 'Certificates',
                component: Certificates,
                meta: {
                    rule: 'editor',
                    title: 'Temp Course | Admin Template',
                }
            },
        ],
    },
    {
        path: '/feature',
        component: Body,
        children: [
            {
                path: 'hiring',
                name: 'Hiring',
                component: Hiring,
                meta: {
                    rule: 'admin',
                    title: 'Hiring | Admin Template',
                }
            },
            {
                path: 'offers',
                name: 'Offers',
                component: OfferPage,
                meta: {
                    rule: 'multiple',
                    title: 'Offers | Admin Template',
                }
            },
        ],
    },
    {
        path: '/widgets',
        component: Body,
        children: [
            {
                path: 'general',
                name: 'general',
                component: GeneralWidgets,
                meta: {
                    rule: 'public',
                    title: 'General Widgets | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'chart',
                name: 'chart',
                component: ChartWidgets,
                meta: {
                    rule: 'public',
                    title: 'Chart Widgets | Cuba - Premium Admin Template',
                }
            },
        ]
    },
    {
        path: '/project',
        component: Body,
        children: [
            {
                path: 'projectlist',
                name: 'project-list',
                component: projectlist,
                meta: {
                    rule: 'public',
                    title: 'Project List | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'create-project',
                name: 'create-project',
                component: createproject,
                meta: {
                    rule: 'public',
                    title: 'Create Project | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/uikits',
        component: Body,
        children: [
            {
                path: 'alert',
                name: 'alert',
                component: alert,
                meta: {
                    rule: 'public',
                    title: 'Alert | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'state-color',
                name: 'Statecolor',
                component: Statecolor,
                meta: {
                    rule: 'public',
                    title: 'Statecolor | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'helper-classes',
                name: 'Helperclasses',
                component: Helperclasses,
                meta: {
                    rule: 'public',
                    title: 'Helperclasses | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'avatars',
                name: 'Avatars',
                component: Avatars,
                meta: {
                    rule: 'public',
                    title: 'Avatars | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'grid',
                name: 'Grid',
                component: Grid,
                meta: {
                    rule: 'public',
                    title: 'Grid | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'tag-pills',
                name: 'Tagpills',
                component: Tagpills,
                meta: {
                    rule: 'public',
                    title: 'Tagpills | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'typography',
                name: 'Typography',
                component: Typography,
                meta: {
                    rule: 'public',
                    title: 'Typography | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'progress-bar',
                name: 'Progressbar',
                component: Progressbar,
                meta: {
                    rule: 'public',
                    title: 'Progressbar | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'modal',
                name: 'Modal',
                component: Modal,
                meta: {
                    rule: 'public',
                    title: 'Modal | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'popover',
                name: 'Popover',
                component: Popover,
                meta: {
                    rule: 'public',
                    title: 'Popover | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'tooltip',
                name: 'Tooltip',
                component: Tooltip,
                meta: {
                    rule: 'public',
                    title: 'Tooltip | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'loader',
                name: 'Spinners',
                component: Spinners,
                meta: {
                    rule: 'public',
                    title: 'Spinners | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'dropdown',
                name: 'Dropdown',
                component: Dropdown,
                meta: {
                    rule: 'public',
                    title: 'Dropdown | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'accordion',
                name: 'Accordion',
                component: Accordion,
                meta: {
                    rule: 'public',
                    title: 'Accordion | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'box-shadow',
                name: 'Boxshadow',
                component: Boxshadow,
                meta: {
                    rule: 'public',
                    title: 'Boxshadow | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'lists',
                name: 'Lists',
                component: Lists,
                meta: {
                    rule: 'public',
                    title: 'Lists | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/advance',
        component: Body,
        children: [
            {
                path: 'scrollable',
                name: 'Scrollable',
                component: Scrollable,
                meta: {
                    rule: 'public',
                    title: 'Scrollable | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'sweetalert',
                name: 'Sweetalert',
                component: Sweetalert,
                meta: {
                    rule: 'public',
                    title: 'Sweetalert | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: Tree,
                meta: {
                    rule: 'public',
                    title: 'Tree | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'rating',
                name: 'Rating',
                component: Rating,
                meta: {
                    rule: 'public',
                    title: 'Rating | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'pagination',
                name: 'Pagination',
                component: Pagination,
                meta: {
                    rule: 'public',
                    title: 'Pagination | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'ribbons',
                name: 'Ribbons',
                component: Ribbons,
                meta: {
                    rule: 'public',
                    title: 'Ribbons | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'tour',
                name: 'Tour',
                component: Tour,
                meta: {
                    rule: 'public',
                    title: 'Tour | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'range-slider',
                name: 'Rangeslider',
                component: Rangeslider,
                meta: {
                    rule: 'public',
                    title: 'Rangeslider | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'breadcrumb',
                name: 'Breadcrumb',
                component: Breadcrumb,
                meta: {
                    rule: 'public',
                    title: 'Breadcrumb | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'dropzone',
                name: 'Dropzone',
                component: Dropzone,
                meta: {
                    rule: 'public',
                    title: 'Dropzone | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'upload',
                name: 'Upload',
                component: Upload,
                meta: {
                    rule: 'public',
                    title: 'Upload | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'sticky',
                name: 'Sticky',
                component: Sticky,
                meta: {
                    rule: 'public',
                    title: 'Sticky | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'toastr',
                name: 'Toastr',
                component: Toastr,
                meta: {
                    rule: 'public',
                    title: 'Toastr | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'image-cropper',
                name: 'ImageCropper',
                component: ImageCropper,
                meta: {
                    rule: 'public',
                    title: 'ImageCropper | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'dragdrop',
                name: 'Draganddrop',
                component: Draganddrop,
                meta: {
                    rule: 'public',
                    title: 'Draganddrop | Cuba - Premium Admin Template',
                }
            },
        ]
    },
    {
        path: '/chart',
        component: Body,
        children: [
            {
                path: 'google',
                name: 'Google Chart',
                component: GoogleChart,
                meta: {
                    rule: 'public',
                    title: 'GoogleChart | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'chartjs',
                name: 'Chart Js',
                component: Chartjs,
                meta: {
                    rule: 'public',
                    title: 'Home Page - Example App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'The home page of our example app.'
                        },
                        {
                            property: 'og:description',
                            content: 'The home page of our example app.'
                        }
                    ]
                }
            },
            {
                path: 'chartist',
                name: 'Chartist',
                component: Chartist,
                meta: {
                    rule: 'public',
                    title: 'Chartist | Cuba - Premium Admin Template',
                }
            },
        ]
    },
    {
        path: '/gallery',
        component: Body,
        children: [
            {
                path: 'grid-gallery',
                name: 'GridGallery',
                component: GridGallery,
                meta: {
                    rule: 'public',
                    title: 'GridGallery | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'gallery-desc',
                name: 'GridGalleryDesc',
                component: GridGalleryDesc,
                meta: {
                    rule: 'public',
                    title: 'GridGalleryDesc | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'gallery-masonary',
                name: 'GalleryMasonary',
                component: GalleryMasonary,
                meta: {
                    rule: 'public',
                    title: 'GalleryMasonary | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'gallery-masonary-desc',
                name: 'GalleryMasonaryDesc',
                component: GalleryMasonaryDesc,

            },
            {
                path: 'hover-effect',
                name: 'HoverEffect',
                component: HoverEffect,
                meta: {
                    rule: 'public',
                    title: 'HoverEffect | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/editor',
        component: Body,
        children: [
            {
                path: 'simple-editor',
                name: 'SimpleEditor',
                component: SimpleEditor,
                meta: {
                    rule: 'public',
                    title: 'SimpleEditor | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'ck-editor',
                name: 'CkEditor',
                component: CkEditor,
                meta: {
                    rule: 'public',
                    title: 'CkEditor | Cuba - Premium Admin Template',
                }

            }
        ]
    },
    {
        path: '/users',
        component: Body,
        children: [
            {
                path: 'profile',
                name: 'UserProfile',
                component: UserProfile,
                meta: {
                    rule: 'public',
                    title: 'serProfile | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'edit',
                name: 'UserEditProfile',
                component: UserEditProfile,
                meta: {
                    rule: 'public',
                    title: 'serEditProfile | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'cards',
                name: 'UserCards',
                component: UserCards,
                meta: {
                    rule: 'public',
                    title: 'serCards | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/blog',
        component: Body,
        children: [
            {
                path: 'details',
                name: 'Blog',
                component: Blog,
                meta: {
                    rule: 'public',
                    title: 'log | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'single',
                name: 'BlogSingle',
                component: BlogSingle,
                meta: {
                    rule: 'public',
                    title: 'logSingle | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/maps',
        component: Body,
        children: [
            {
                path: 'vue-google-maps',
                name: 'GoogleMaps',
                component: GoogleMaps,
                meta: {
                    rule: 'public',
                    title: 'oogleMaps | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'vue-leaflet-maps',
                name: 'VueLeaflet',
                component: VueLeaflet,
                meta: {
                    rule: 'public',
                    title: 'ueLeaflet | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/icons',
        component: Body,
        children: [
            {
                path: 'flag',
                name: 'Flag',
                component: Flag,
                meta: {
                    rule: 'public',
                    title: 'Flag | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'ico',
                name: 'Ico',
                component: Ico,
                meta: {
                    rule: 'public',
                    title: 'Ico | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'themify',
                name: 'Themify',
                component: Themify,
                meta: {
                    rule: 'public',
                    title: 'Themify | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'fontawesome',
                name: 'Fontawesome',
                component: Fontawesome,
                meta: {
                    rule: 'public',
                    title: 'Fontawesome | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'feather_icon',
                name: 'FeatherIcon',
                component: FeatherIcon,
                meta: {
                    rule: 'public',
                    title: 'FeatherIcon | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'whether',
                name: 'WhetherIcon',
                component: WhetherIcon,
                meta: {
                    rule: 'public',
                    title: 'WhetherIcon | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/form',
        component: Body,
        children: [
            {
                path: 'wizard',
                name: 'FormWizard',
                component: FormWizrd,
                meta: {
                    rule: 'public',
                    title: 'FormWizrd | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'validation',
                name: 'FormValidation',
                component: FormValidation,
                meta: {
                    rule: 'public',
                    title: 'FormValidation | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'inputs',
                name: 'FormBaseInputs',
                component: FormBaseInputs,
                meta: {
                    rule: 'public',
                    title: 'FormBaseInputs | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'checkbox-radio',
                name: 'FormCheckboxRadio',
                component: FormCheckboxRadio,
                meta: {
                    rule: 'public',
                    title: 'FormCheckboxRadio | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'input-groups',
                name: 'FormInputGroups',
                component: FormInputGroups,
                meta: {
                    rule: 'public',
                    title: 'FormInputGroups | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'mega-options',
                name: 'FormMegaOptions',
                component: FormMegaOptions,
                meta: {
                    rule: 'public',
                    title: 'FormMegaOptions | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'datepicker',
                name: 'FormDatepicker',
                component: FormDatepicker,
                meta: {
                    rule: 'public',
                    title: 'FormDatepicker | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'select2',
                name: 'FormSelect2',
                component: FormSelect2,
                meta: {
                    rule: 'public',
                    title: 'FormSelect2 | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'switch',
                name: 'FormSwitch',
                component: FormSwitch,
                meta: {
                    rule: 'public',
                    title: 'FormSwitch | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'typeahead',
                name: 'FormTypeahead',
                component: FormTypeahead,
                meta: {
                    rule: 'public',
                    title: 'FormTypeahead | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'clipboard',
                name: 'FormClipboard',
                component: FormClipboard,
                meta: {
                    rule: 'public',
                    title: 'FormClipboard | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'touchspin',
                name: 'FormTouchspin',
                component: FormTouchspin,
                meta: {
                    rule: 'public',
                    title: 'FormTouchspin | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'mega-options',
                name: 'Form Mega Options',
                component: FormMegaOptions,
                meta: {
                    rule: 'public',
                    title: 'FormMegaOptions | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/table',
        component: Body,
        children: [
            {
                path: 'basic',
                name: 'BootstrapBasic',
                component: BootstrapBasic,
                meta: {
                    rule: 'public',
                    title: 'BootstrapBasic | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'sizing',
                name: 'BootstrapSizing',
                component: BootstrapSizing,
                meta: {
                    rule: 'public',
                    title: 'BootstrapSizing | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'border',
                name: 'BootstrapBorder',
                component: BootstrapBorder,
                meta: {
                    rule: 'public',
                    title: 'BootstrapBorder | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'styling',
                name: 'BootstrapStyling',
                component: BootstrapStyling,
                meta: {
                    rule: 'public',
                    title: 'BootstrapStyling | Cuba - Premium Admin Template',
                }
            },
            {
                path: '/datatable-basic',
                name: 'DatatableBasic',
                component: DatatableBasic,
                meta: {
                    rule: 'public',
                    title: 'DatatableBasic | Cuba - Premium Admin Template',
                }
            },
            {
                path: '/datatable-select-delete',
                name: 'DatatableSelectDelete',
                component: DatatableSelectDelete,
                meta: {
                    rule: 'public',
                    title: 'DatatableSelectDelete | Cuba - Premium Admin Template',
                }
            },
            {
                path: '/filter-table',
                name: 'FilterTable',
                component: FilterTable,
                meta: {
                    rule: 'public',
                    title: 'FilterTable | Cuba - Premium Admin Template',
                }
            },
            {
                path: '/datatable-export',
                name: 'DatatableExport',
                component: DatatableExport,
                meta: {
                    rule: 'public',
                    title: 'DatatableExport | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'smarttable',
                name: 'SmartTable',
                component: SmartTable,
                meta: {
                    rule: 'public',
                    title: 'SmartTable | Cuba - Premium Admin Template',
                }
            },
        ]
    },
    {
        path: '/buttons',
        component: Body,
        children: [
            {
                path: 'default',
                name: 'default_buttons',
                component: Default_buttons,
                meta: {
                    rule: 'public',
                    title: 'Default_buttons | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'flat',
                name: 'flat_buttons',
                component: Flat_buttons,
                meta: {
                    rule: 'public',
                    title: 'Flat_buttons | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'edge',
                name: 'edge_buttons',
                component: Edge_buttons,
                meta: {
                    rule: 'public',
                    title: 'Edge_buttons | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'raised',
                name: 'raised_buttons',
                component: Raised_buttons,
                meta: {
                    rule: 'public',
                    title: 'Raised_buttons | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'group',
                name: 'group_buttons',
                component: Group_buttons,
                meta: {
                    rule: 'public',
                    title: 'Group_buttons | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/ecommerce',
        component: Body,
        children: [

            {
                path: 'product',
                name: 'Product',
                component: Products,
                meta: {
                    rule: 'public',
                    title: 'Products | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'details/:id',
                name: 'Product Details',
                component: ProductDetails,
                meta: {
                    rule: 'public',
                    title: 'ProductDetails | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'cart',
                name: 'Cart',
                component: Cart,
                meta: {
                    rule: 'public',
                    title: 'Cart | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'wishlist',
                name: 'Wishlist',
                component: Wishlist,
                meta: {
                    rule: 'public',
                    title: 'Wishlist | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'checkout',
                name: 'Checkout',
                component: Checkout,
                meta: {
                    rule: 'public',
                    title: 'Checkout | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'invoice',
                name: 'Invoice',
                component: Invoice,
                meta: {
                    rule: 'public',
                    title: 'Invoice | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'success',
                name: 'Success',
                component: Success,
                meta: {
                    rule: 'public',
                    title: 'Success | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'order/history',
                name: 'Order History',
                component: OrderHistory,
                meta: {
                    rule: 'public',
                    title: 'OrderHistory | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'payment/details',
                name: 'payment Details',
                component: PaymentDetails,
                meta: {
                    rule: 'public',
                    title: 'PaymentDetails | Cuba - Premium Admin Template',
                }
            },
        ]
    },
    {
        path: '/cards',
        component: Body,
        children: [
            {
                path: 'basic',
                name: 'Basic',
                component: Basic,
                meta: {
                    rule: 'public',
                    title: 'BootstrapStyling | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'creative',
                name: 'Creative',
                component: Creative,
                meta: {
                    rule: 'public',
                    title: 'Creative | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'tabbed',
                name: 'Tabbed',
                component: Tabbed,
                meta: {
                    rule: 'public',
                    title: 'Tabbed | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'draggable',
                name: 'Draggable',
                component: Draggable,
                meta: {
                    rule: 'public',
                    title: 'Draggable | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/app',
        component: Body,
        children: [
            {
                path: 'todo',
                name: 'todo',
                component: Todo,
                meta: {
                    rule: 'public',
                    title: 'Todo | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'firebase-todo',
                name: 'FirebaseTodo',
                component: FirebaseTodo,
                meta: {
                    rule: 'public',
                    title: 'FirebaseTodo | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'chat',
                name: 'chat',
                component: Chat,
                meta: {
                    rule: 'public',
                    title: 'Chat | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'videochat',
                name: 'Video chat',
                component: Videochat,
                meta: {
                    rule: 'public',
                    title: 'Video Chat | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'email',
                name: 'Email',
                component: Email,
                meta: {
                    rule: 'public',
                    title: 'Email, | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'filemanager',
                name: 'File Manager',
                component: FileManager,
                meta: {
                    rule: 'public',
                    title: 'File Manager, | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'kanban',
                name: 'Kanban Board',
                component: Kanban,
                meta: {
                    rule: 'public',
                    title: 'Kanban Board, | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'bookmark',
                name: 'Bookmark',
                component: Bookmark,
                meta: {
                    rule: 'public',
                    title: 'Bookmark | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'calendar',
                name: 'Calendar',
                component: Calendar,
                meta: {
                    rule: 'public',
                    title: 'Calendar | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/timeline',
        component: Body,
        children: [
            {
                path: 'one',
                name: 'TimelineOne',
                component: TimelineOne,
                meta: {
                    rule: 'public',
                    title: 'TimelineOne | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/auth',
        component: Auth,
        children: [
            {
                path: 'login',
                name: 'Login 1',
                component: login,
                meta: {
                    rule: 'public',
                    title: ' login | Cuba - Premium Admin Template',
                }
            },
            {
                path: 'register',
                name: 'register 1',
                component: Register,
                meta: {
                    rule: 'public',
                    title: ' Register | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/pages',
        component: Body,
        children: [
            {
                path: '/pages/sample-page',
                name: 'SamplePage',
                component: SamplePage,
                meta: {
                    rule: 'public',
                    title: 'SamplePage | Cuba - Premium Admin Template',
                }
            },
            {
                path: '/pages/pricing',
                name: 'Pricing',
                component: Pricing,
                meta: {
                    rule: 'public',
                    title: 'Pricing | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/callback',
        name: 'callback',
        component: callback,
        meta: {
            rule: 'public',
            title: 'Auth0',
        }
    },
    {
        path: '/pages',
        component: Body,
        children: [
            {
                path: '/pages/faq',
                name: 'Faq',
                component: Faq,
                meta: {
                    rule: 'public',
                    title: 'Faq | Cuba - Premium Admin Template',
                }
            },
            {
                path: '/pages/support',
                name: 'Support',
                component: Support,
                meta: {
                    rule: 'public',
                    title: 'Support | Cuba - Premium Admin Template',
                }
            },
            {
                path: '/pages/social-app',
                name: 'Social',
                component: Social,
                meta: {
                    rule: 'public',
                    title: 'Social | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/job',
        component: Body,
        children: [
            {
                path: '/job/list',
                name: 'JobList',
                component: JobList,
                meta: {
                    rule: 'public',
                    title: 'JobList | Cuba - Premium Admin Template',
                }
            },
            {
                path: '/job/details/:id',
                name: 'JobDetails',
                component: JobDetails,
                meta: {
                    rule: 'public',
                    title: 'JobDetails, | Cuba - Premium Admin Template',
                },
                props: true
            },
            {
                path: '/job/apply/:id',
                name: 'JobApply',
                component: JobApply,
                meta: {
                    rule: 'public',
                    title: 'JobApply, | Cuba - Premium Admin Template',
                },
                props: true
            }
        ]
    },
    {
        path: '/search',
        component: Body,
        children: [
            {
                path: '/pages/search',
                name: 'Search',
                component: Search,
                meta: {
                    rule: 'public',
                    title: 'Search | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/learning',
        component: Body,
        children: [
            {
                path: '/learning/list',
                name: 'Learninglist',
                component: Learninglist,
                meta: {
                    rule: 'public',
                    title: 'Learninglist | Cuba - Premium Admin Template',
                }
            },
            {
                path: '/learning/details/:id',
                name: 'Coursedetailed',
                component: Coursedetailed,
                meta: {
                    rule: 'public',
                    title: 'Coursedetailed, | Cuba - Premium Admin Template',
                },
                props: true
            }
        ]
    },
    {
        path: '/knowledgebase',
        component: Body,
        children: [
            {
                path: '/',
                name: 'Knowledgebase',
                component: Knowledgebase,
                meta: {
                    rule: 'public',
                    title: 'Knowledgebase | Cuba - Premium Admin Template',
                }
            }
        ]
    },
    {
        path: '/error-400',
        name: 'Error400',
        component: Error400,
        meta: {
            rule: 'public',
            title: 'Error400 | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/error-401',
        name: 'Error401',
        component: Error401,
        meta: {
            rule: 'public',
            title: 'Error401 | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/error-403',
        name: 'Error403',
        component: Error403,
        meta: {
            rule: 'public',
            title: 'Error403 | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/error-404',
        name: 'Error404',
        component: Error404,
        meta: {
            rule: 'public',
            title: 'Error404 | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/error-500',
        name: 'Error500',
        component: Error500,
        meta: {
            rule: 'public',
            title: 'Error500 | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/error-503',
        name: 'Error503',
        component: Error503,
        meta: {
            rule: 'public',
            title: 'Error503 | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/maintenance',
        name: 'Maintenance',
        component: Maintenance,
        meta: {
            rule: 'public',
            title: 'Maintenance | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/comingsoon/comingsoon-simple',
        name: 'ComingsoonSimple',
        component: ComingsoonSimple,
        meta: {
            rule: 'public',
            title: 'ComingsoonSimple | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/comingsoon/comingsoon-image',
        name: 'ComingsoonImage',
        component: ComingsoonImage,
        meta: {
            rule: 'public',
            title: 'ComingsoonImage | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/comingsoon/comingsoon-video',
        name: 'ComingsoonVideo',
        component: ComingsoonVideo,
        meta: {
            rule: 'public',
            title: 'ComingsoonVideo | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/authentication/login/one',
        name: 'LoginOne',
        component: LoginOne,
        meta: {
            rule: 'public',
            title: 'LoginOne | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/authentication/login/two',
        name: 'LoginTwo',
        component: LoginTwo,
        meta: {
            rule: 'public',
            title: 'LoginTwo | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/authentication/login/validate',
        name: 'LoginValidate',
        component: LoginValidate,
        meta: {
            rule: 'public',
            title: 'LoginValidate | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/authentication/register/image',
        name: 'RegisterImage',
        component: RegisterImage,
        meta: {
            rule: 'public',
            title: 'RegisterImage | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/authentication/register/image2',
        name: 'RegisterImage2',
        component: RegisterImage2,
        meta: {
            rule: 'public',
            title: 'RegisterImage2 | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/authentication/unlockuser',
        name: 'Unlock',
        component: Unlock,
        meta: {
            rule: 'public',
            title: 'Unlock | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/authentication/forgetpassword',
        name: 'ForgetPassword',
        component: ForgetPassword,
        meta: {
            rule: 'public',
            title: 'ForgetPassword | Cuba - Premium Admin Template',
        }
    },
    {
        path: '/authentication/resetpassword',
        name: 'ResetPassword',
        component: ResetPassword,
        meta: {
            rule: 'public',
            title: 'ResetPassword | Cuba - Premium Admin Template',
        }
    },

];

const router = new Router({
    routes,
    base: '/',
    mode: 'history',
    linkActiveClass: "active",
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

router.beforeEach((to, from, next) => {
    // next();
    // console.log(to.meta.rule);
    const token = store.getters.getToken;
    console.log(token)
    if (to.meta.rule != 'public') {
        if (to.path != '/auth/login') {
            if (token == null) {
                next('/auth/login');
            } else {
                next();
            }
        } else {
            next();
        }
    } else {
        next();
    }
    // next(); - This is in the wrong place
    // firebase.auth().onAuthStateChanged(() => {
    //   if(to.meta.title)
    //     document.title = to.meta.title;
    //   const CurrentUser = firebase.auth().currentUser;
    //   const  path = ['/auth/login','/auth/register'];
    //   if (path.includes(to.path) || to.path === "/callback" || CurrentUser || Userauth.isAuthenticatedUser()){
    //     return next();
    //   }
    //   next('/auth/login')
    // });
});

export default router
