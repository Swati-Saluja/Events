const EVENTFUL_SEARCH_URL ='https://api.eventful.com/json/events/search';
function getDataFromApi(searchTermOne, searchTermTwo, searchTermThree, dates, callback) {
  const query = {
    location:searchTermOne,
    keywords:searchTermTwo,
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
function renderResult(result) {
  return `
      
      <div class="result-displayed">

        <div class="image">
          <a class="js-result-title" href="${result.url}" target="_blank"><div class="img" style="background-image:url('${result.image.medium.url}')"
            alt="Sorry! This image does not exist!"></div></a>
          <p>Click on the Image for more details!</p>
        </div> 

        <h2 id="title">${result.title} </h2>
        <h4>${result.start_time}</h4>
        <h3>in ${result.city_name}</h3>
        <p>Check out ${result.title}!</p> 
      
        <div class="rateYo" aria-labelled-by="rating">
                <script>$(".rateYo").rateYo({
               starWidth: "20px"
                });</script> 
        </div> 

      </div>
  `;
}

function displayEventfulSearchData(data) {
   
  const results = data.events.event.map((item, index) => {
    
    if(item.image === null){
      item.image = { medium: {url: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAfTAAAAJGUzYWU5MjNlLWUyYmItNGEyYi05OWM4LWNkYzI0NGU2YWZmNQ.jpg'}};
    }

    else{
      item.image.medium.url='https:'+item.image.medium.url;
    }

    item.start_time = moment(item.start_time).format('dddd, MMMM Do YYYY, h:mm a');

    return renderResult(item); 
  })

  $('.js-search-results').html(`<h1>Results</h1>` +
    `<h4>About ${data.total_items} result/s </h4>` 
  );


  $(".results").html(results);

}        

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();

      const searchTermOne = $("#location").val();
      const searchTermTwo = $("#keyword").val();
      const startDate = $("#start_date").val();
      const endDate = $("#end_date").val();
      const searchTermThree = $("#miles").val();
      const start_date=moment(startDate).format('YYYYMMDD00');
      const end_date= moment(endDate).format('YYYYMMDD00');    
      const dates=`${start_date}-${end_date}`;
   
    getDataFromApi(searchTermOne, searchTermTwo, searchTermThree, dates, displayEventfulSearchData);
  });
}

$(watchSubmit);
