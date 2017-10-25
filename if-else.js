<script>if (result.image===null){
      <img src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAfTAAAAJGUzYWU5MjNlLWUyYmItNGEyYi05OWM4LWNkYzI0NGU2YWZmNQ.jpg" alt="${result.title}'s image">
      },
      else{
        <img src="${result.image.medium.url}" alt="${result.title}'s image">
      };
        </script>

        if(image.medium.url.startsWith("http:")){
    return image.medium.url;
   

   css in js file:-

   <script>$("h4").css({color: "red"});
        </script>

        <script>$("h1, h4").css({"margin-left": "20px"});
        </script>


    <form class="rating" class="js-search-form" aria-label="rating">
            <label for="rating"> 
            <input type="hidden" name="rat" class="rat-value" aria-label="value="0"/></label>
    </form>    
 $(".results").html(results);
  for ($i = 0; $i < count($results); $i++) {
  $css_class = 'results ';  // Elements can have multiple css classes
  $css_class .= $i % 2 == 0 ? 'results_odd' : 'results_even';
  // generate html using class="$css_class"...
}
  $(".results:odd").addClass('odd'); 
    $(".results:even").addClass('even'); 
    
  $(".results:odd").css("background-color", "grey");

  if page_number === "10" && page_count === "10"
// then no next button
if page_number < 2
then no previous button

$('.action').html( {

        //usual pager parameters//

        /*show pager if only necessary
        console.log(this.fnSettings());*/
        var page_number=1;
       if (${data.page_number} === ${data.page_count}){
          $(".next").hide();
        }
        else if (${data.page_number} < 2){
          $(".prev").hide();
        } 
        $(".next").click(event=>{
          event.preventDefault();
          $("{data.page_number}")++;
}

        })
  });

function pagination(pNumber){

    $(".prev, .next").click(event=>{
      event.preventDefault();
      // $("{data.page_number}")++;
      var page_number=1;
      // if (${data.page_number} === ${data.page_count}){
        $(".next").hide();
      // }
      // else if (${data.page_number} < 2){
        $(".prev").hide();
      });
    // }

  // }