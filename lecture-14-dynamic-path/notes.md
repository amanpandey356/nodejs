# Here We Will Leanr About Dynamic path there are two parts in which this dynamic part is being divided
-- example there is a user page but there are many user which constantly changes, so for that we will apply dynamic path.
-- In our airbnb project, when we click on detail of house we need to open the detail page of that page.
## Step We use to achieve dynamic path
1. href="/homes/<%= home.id %>
2. storeRouter.get('/homes/:homeId', storeController.getHomeDetail)
3. exports.getHomeDetail = (req, res, next) => {
     const homeId = req.params.homeId
     Home.fetchById(homeId, home=>{
       if(!home){
         res.redirect('/homes')
       }else{
         res.render('store/home-detail', {home: home, pageTitle: 'Home Detail', currentPage: 'Home'})
       }
     })
   }
# Part 1 : In this part we added a detail for particular home, favourite page(adding favourite and displaying it)

### Part 2 ###
-- Edit Home Implemented. delete home, delete from favourites
-- upto now we have done everything with file handling
-- In the upcoming chapter we will be dealing with databases