//import data from "/json";

const EVENTFUL_SEARCH_URL ='https://api.eventful.com/json/events/search';
//console.log(data);
function getDataFromApi(searchTermOne, searchTermTwo, searchTermThree, dates, callback) {
  const query = {
    location:searchTermOne,
    keywords:searchTermTwo,
    //start_date: startDate, //moment().format('YYYYMMDD00'),
    //end_date: endDate, //moment().format('YYYYMMDD00')
    date: dates,
    within:searchTermThree,
    units:'mi',
    sort_order: 'date',
    app_key:'FJjthswGhP26qMXR'

    }
    
          
  $.ajax({
      url: EVENTFUL_SEARCH_URL,
      data: query,
      dataType: 'jsonp',
      success: callback,
      error: function(){
        console.log("error");
        
      }
    });
  
}
//console.log("hi");
function renderResult(result) {
  console.log(result);
  //console.log(result.image.medium.url);
  //var vId=console.log(result.id.videoId);
  //var vId=result.id.videoId;
  //console.log(vId);
  console.log(result.title);
  //console.log(totalResults);
  return `
      
      <div class="result-displayed">

                
        <div class="image">
            <a class="js-result-title" href="${result.url}" target="_blank"><div class="img" style="background-image:url('${result.image.medium.url}')"
            alt="Sorry! This image does not exist!"></div></a>
            <p>Click on the Image!</p>
        </div> 
        <h2 id="title">${result.title} </h2>
              
        <h4>${result.start_time}</h4>
         
        <h3>in ${result.city_name}</h3>

    
        

        <p>Check out ${result.title}!</p> 
      
      <div class="rateYo" aria-labelled-by="rating">
                <script>$(".rateYo").rateYo({
               starWidth: "20px"
                });</script> </div> 

      </div>



    

  `;
  
 // console.log("hi");
}
//console.log("a");
function displayEventfulSearchData(data) {
  //console.log("hello");
  //console.log(data.events.event[1].title);
  //console.log(data.items[1].id.videoId);
 // let movieTitle = data.items[0].snippet.title;
  //let results = []
  //for(let i =0; i < data.items.length; i++) {
    // results.push(renderResult(data.items[i]));
  //}
     //const results = data.items.map( function (item, index) { 
     //return renderResult(item)
   //});

   
 const results = data.events.event.map((item, index) => {
    //console.log(item);
    //console.log(item.image);
    //console.log(item.image.medium.url);

  //item.image = !item.image ? { medium: {url: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAfTAAAAJGUzYWU5MjNlLWUyYmItNGEyYi05OWM4LWNkYzI0NGU2YWZmNQ.jpg'}} : item.image;
  if(item.image === null)
  {
    item.image = { medium: {url: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAfTAAAAJGUzYWU5MjNlLWUyYmItNGEyYi05OWM4LWNkYzI0NGU2YWZmNQ.jpg'}};
    //console.log(item.image.medium.url);
  }
  else 
  {
    console.log(item.image.medium.url);
    item.image.medium.url='https:'+item.image.medium.url;
    //item.image.medium.url=`'http:${item.image.medium.url}'`;

    //console.log(item.image.medium.url);
}

      item.start_time = moment(item.start_time).format('dddd, MMMM Do YYYY, h:mm a');

      console.log(item.start_time);
          
   //console.log($(item.image.medium.url));
    return renderResult(item); 
})

// console.log(results);
 // console.log(data);
  //$('.js-search-results').prepend(`<h4>About ${data.pageInfo.totalResults} results </h4>`);
  $('.js-search-results').html(`<h1>Results</h1>` +
    `<h4>About ${data.total_items} result/s </h4>` 
    );


  $(".results").html(results +

   `<div class=action>
      <button class="prev" type="button"><a href="#">&lt; prev</a></button>
      <button class="next" type="button"><a href="#">next &gt;</a></button>
    </div>`);

  }        

  



        

//console.log("b");
function watchSubmit() {
  //console.log("d");
  $('.js-search-form').submit(event => {
    //console.log("e");
    event.preventDefault();

    // const queryTarget = $(event.currentTarget).find('.js-query');
    // const searchTerm = queryTarget.val();
    // console.log("a");
    // const queryTargetOne = $(event.currentTarget).find('.js-query');
    // console.log("b");
    // const searchTermTwo=queryTargetOne.val();
    // // clear out the input
    // queryTarget.val("");
    // queryTargetOne.val("");
    //console.log("c");
    const searchTermOne = $("#location").val();
    const searchTermTwo = $("#keyword").val();
    const startDate = $("#start_date").val();
    const endDate = $("#end_date").val();
    const searchTermThree = $("#miles").val();
    const start_date=moment(startDate).format('YYYYMMDD00');
    const end_date= moment(endDate).format('YYYYMMDD00');    
    const dates=`${start_date}-${end_date}`;
   // console.log(dates);
    //console.log(start_date, end_date);
    //console.log(searchTermOne,searchTermTwo, searchTermThree);

    getDataFromApi(searchTermOne, searchTermTwo, searchTermThree, dates, displayEventfulSearchData);
  });
}

$(watchSubmit);
