const express = require('express')
const router = express.Router()
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware')
const UserController = require('../controllers/UserController')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')
const WishController = require('../controllers/WishController')
const BlogController = require('../controllers/BlogController')
const ContactController = require('../controllers/ContactController')
const FaqController = require('../controllers/FaqController')
const CareerController = require('../controllers/CareerController')
const FeaturesController = require('../controllers/FeaturesController')
const TeamController = require('../controllers/TeamController')
const ReservationController = require('../controllers/ReservationController')
const LegalController = require('../controllers/LegalController')
const ReviewController = require('../controllers/ReviewController')
const InvoiceController = require('../controllers/InvoiceController')

//User API
router.post('/SaveUser',UserController.SaveUser)
router.post('/UpdateUser',AuthVerifyMiddleware,UserController.UpdateUser)
router.get('/ReadUser',AuthVerifyMiddleware,UserController.ReadUser)
router.get('/RemoveUser',AuthVerifyMiddleware,UserController.RemoveUser)

router.post('/LoginUser',UserController.LoginUser)
router.get('/LogoutUser',AuthVerifyMiddleware,UserController.LogoutUser)
router.get('/SendOTP/:email',UserController.SendOTP)
router.get('/VerifyOTP/:email/:otp',UserController.VerifyOTP)
router.get('/ResetPassword/:email/:otp/:password',UserController.ResetPassword)

router.post('/SaveProfile',AuthVerifyMiddleware,UserController.SaveProfile)
router.post('/UpdateProfile',AuthVerifyMiddleware,UserController.UpdateProfile)
router.get('/ReadProfile',AuthVerifyMiddleware,UserController.ReadProfile)
router.get('/RemoveProfile',AuthVerifyMiddleware,UserController.RemoveProfile)

//Product API
router.post('/SaveCategory',ProductController.SaveCategory)
router.post('/UpdateCategory/:categoryID',ProductController.UpdateCategory)
router.get('/ReadCategory/:categoryID',ProductController.ReadCategory)
router.get('/RemoveCategory/:categoryID',ProductController.RemoveCategory)
router.get('/CategoryList',ProductController.CategoryList)
router.post('/SaveProduct',ProductController.SaveProduct)
router.post('/SaveProductDetails',ProductController.SaveProductDetails)
router.post('/UpdateProduct/:productID',ProductController.UpdateProduct)
router.post('/UpdateProductDetails/:productID',ProductController.UpdateProductDetails)
router.get('/ProductDetails/:productID',ProductController.ProductDetails)
router.get('/RemoveProduct/:productID',ProductController.RemoveProduct)
router.post('/RemoveProductDetails/:productID',ProductController.RemoveProductDetails)
router.get('/ProductList',ProductController.ProductList)
router.get('/ProductListByCategory/:categoryID',ProductController.ProductListByCategory)
router.get('/MenuProductList',ProductController.MenuProductList)
router.get('/MenuProductListByRemark/:remark',ProductController.MenuProductListByRemark)
router.get('/ProductListByType/:type',ProductController.ProductListByType)
router.get('/ProductListByRemark/:remark',ProductController.ProductListByRemark)
router.post('/ProductListByFilter',ProductController.ProductListByFilter)

//Slider API
router.post('/SaveSlider',ProductController.SaveSlider)
router.post('/UpdateSlider/:sliderID',ProductController.UpdateSlider)
router.get('/ReadSlider/:sliderID',ProductController.ReadSlider)
router.get('/RemoveSlider/:sliderID',ProductController.RemoveSlider)
router.get('/SliderList',ProductController.SliderList)

//Cart API
router.post('/SaveCart',AuthVerifyMiddleware,CartController.SaveCart)
router.post('/UpdateCart/:cartID',AuthVerifyMiddleware,CartController.UpdateCart)
router.get('/ReadCart/:cartID',AuthVerifyMiddleware,CartController.ReadCart)
router.get('/RemoveCart/:cartID',AuthVerifyMiddleware,CartController.RemoveCart)
router.get('/CartList',AuthVerifyMiddleware,CartController.CartList)

//Wish API
router.get('/SaveWish/:productID',AuthVerifyMiddleware,WishController.SaveWish)
router.get('/UpdateWish/:productID',AuthVerifyMiddleware,WishController.UpdateWish)
router.get('/ReadWish/:productID',AuthVerifyMiddleware,WishController.ReadWish)
router.get('/RemoveWish/:productID',AuthVerifyMiddleware,WishController.RemoveWish)
router.get('/WishList',AuthVerifyMiddleware,WishController.WishList)


//Blog API
router.post('/SaveBlog',BlogController.SaveBlog)
router.post('/UpdateBlog/:blogID',BlogController.UpdateBlog)
router.get('/ReadBlog/:blogID',BlogController.ReadBlog)
router.get('/RemoveBlog/:blogID',BlogController.RemoveBlog)
router.get('/BlogList',BlogController.BlogList)
router.get('/BlogListByRemark/:remark',BlogController.BlogListByRemark)
router.post('/SaveComment',BlogController.SaveComment)
router.post('/UpdateComment/:commentID',BlogController.UpdateComment)
router.get('/RemoveComment/:commentID',BlogController.RemoveComment)
router.get('/CommentList/:blogID',BlogController.CommentList)

//Contact API
router.post('/SaveContact',ContactController.SaveContact)
router.post('/UpdateContact/:contactID',ContactController.UpdateContact)
router.get('/ReadContact/:contactID',ContactController.ReadContact)
router.get('/RemoveContact/:contactID',ContactController.RemoveContact)
router.get('/ContactList',ContactController.ContactList)

//Faq API
router.post('/SaveFaq',FaqController.SaveFaq)
router.post('/UpdateFaq/:faqID',FaqController.UpdateFaq)
router.get('/ReadFaq/:faqID',FaqController.ReadFaq)
router.get('/RemoveFaq/:faqID',FaqController.RemoveFaq)
router.get('/FaqList',FaqController.FaqList)

//Career API
router.post('/SaveJobCategory',CareerController.SaveJobCategory)
router.get('/ReadJobCategory/:jobCategoryID',CareerController.ReadJobCategory)
router.post('/UpdateJobCategory/:jobCategoryID',CareerController.UpdateJobCategory)
router.get('/RemoveJobCategory/:jobCategoryID',CareerController.RemoveJobCategory)
router.get('/JobCategoryList',CareerController.JobCategoryList)
router.post('/SaveJob',CareerController.SaveJob)
router.get('/ReadJob/:jobID',CareerController.ReadJob)
router.post('/UpdateJob/:jobID',CareerController.UpdateJob)
router.get('/RemoveJob/:jobID',CareerController.RemoveJob)
router.get('/JobList',CareerController.JobList)
router.get('/JobListByCategory/:jobCategoryID',CareerController.JobListByCategory)
router.get('/JobListBySearch/:keyword',CareerController.JobListBySearch)

//Features API
router.post('/SaveFeature',FeaturesController.SaveFeature)
router.post('/UpdateFeature/:featureID',FeaturesController.UpdateFeature)
router.get('/ReadFeature/:featureID',FeaturesController.ReadFeature)
router.get('/RemoveFeature/:featureID',FeaturesController.RemoveFeature)
router.get('/FeatureList',FeaturesController.FeatureList)

//Teams API
router.post('/SaveTeam',TeamController.SaveTeam)
router.post('/UpdateTeam/:teamID',TeamController.UpdateTeam)
router.get('/ReadTeam/:teamID',TeamController.ReadTeam)
router.get('/RemoveTeam/:teamID',TeamController.RemoveTeam)
router.get('/TeamList',TeamController.TeamList)

//Reservation API
router.post('/SaveReservation',AuthVerifyMiddleware,ReservationController.SaveReservation)
router.get('/ReadReservation/:reservationID',AuthVerifyMiddleware,ReservationController.ReadReservation)
router.post('/UpdateReservation/:reservationID',AuthVerifyMiddleware,ReservationController.UpdateReservation)
router.get('/RemoveReservation/:reservationID',AuthVerifyMiddleware,ReservationController.RemoveReservation)
router.get('/ReservationList',AuthVerifyMiddleware,ReservationController.ReservationList)

//About API
router.post('/SaveLegal',LegalController.SaveLegal)
router.post('/UpdateLegal/:legalID',LegalController.UpdateLegal)
router.get('/ReadLegal/:legalID',LegalController.ReadLegal)
router.get('/LegalListByType/:type',LegalController.LegalListByType)
router.get('/RemoveLegal/:legalID',LegalController.RemoveLegal)

//Reviews API
router.post('/SaveReview',AuthVerifyMiddleware,ReviewController.SaveReview)
router.post('/UpdateReview',AuthVerifyMiddleware,ReviewController.UpdateReview)
router.get('/ReadReview/:productID',AuthVerifyMiddleware,ReviewController.ReadReview)
router.get('/RemoveReview/:productID',AuthVerifyMiddleware,ReviewController.RemoveReview)
router.get('/ReviewListByProduct/:productID',ReviewController.ReviewListByProduct)
router.get('/ReviewList',ReviewController.ReviewList)

//Invoice API
router.post('/SaveInvoiceSetting',InvoiceController.SaveInvoiceSetting)
router.post('/UpdateInvoiceSetting/:settingID',InvoiceController.UpdateInvoiceSetting)
router.get('/ReadInvoiceSetting/:settingID',InvoiceController.ReadInvoiceSetting)
router.get('/RemoveInvoiceSetting/:settingID',InvoiceController.RemoveInvoiceSetting)

router.post('/CreateOnTableInvoice',AuthVerifyMiddleware,InvoiceController.CreateOnTableInvoice)
router.post('/CreatePickUpInvoice',AuthVerifyMiddleware,InvoiceController.CreatePickUpInvoice)
router.post('/CreateHomeDeliveryInvoice',AuthVerifyMiddleware,InvoiceController.CreateHomeDeliveryInvoice)

router.post('/PaymentSuccess/:trxID',InvoiceController.PaymentSuccess)
router.post('/PaymentFail/:trxID',InvoiceController.PaymentFail)
router.post('/PaymentCancel/:trxID',InvoiceController.PaymentCancel)
router.post('/PaymentIPN/:trxID',InvoiceController.PaymentIPN)

router.get('/InvoiceList',AuthVerifyMiddleware,InvoiceController.InvoiceList)
router.get('/InvoiceDetails/:invoiceID',AuthVerifyMiddleware,InvoiceController.InvoiceDetails)

router.get('/UpdateDeliveryStatus/:trxID/:status',InvoiceController.UpdateDeliveryStatus)


module.exports = router;








