import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './css/style.css';

class App extends React.Component{
  render (){
     return (
    <div className="App" >
	<div className="body-grid">
	<div></div>
	<div>

 {/* Web First sections  */}
	<div id="first">
		<img src="images/smile.png" className="lady" />
		<div className="containerFirst">
			<img src="images/ABI.svg" className="ABI" alt=""/>
			<p className="smile">ابتسامة جديدة مع</p>
			<p className="smile2">التقويم الشفاف</p>
			<img src="images/transperentWithSmile.png" className="braces" alt=""/>
			<img src="images/eon.svg" className="eon"  alt=""/>
			<p className="invisible">Invisible Braces</p>
			<button className="firstButton">
				<p className="buttonP">!احجز موعدك الان</p>
			</button>
		</div>

	</div>

     {/* Mobile First section */}

<div id="first-mobile">
		<div className="containerFirst-one-mobile">
			<img src="images/ABI.svg" className="ABI-mobile" alt=""/>
			<p className="smile-mobile">ابتسامة جديدة مع</p>
			<p className="smile2-mobile">التقويم الشفاف</p>
		</div>
	
	<img src="images/smile3.png" style={{width: '100%', marginLeft: 'auto', marginRight: 'auto'}}
		alt=""/>
	
	<button className="firstButton-mobile">
		<p className="buttonP-mobile">!احجز موعدك الان</p>
	</button>
	<div className="containerFirst-two-mobile">
		<div className="aligner-grid">
			<img src="images/transperentWithSmile.png" className="braces-mobile" alt=""/>
			<div></div>
		</div>
		<div className="mobile-grid">
			<img src="images/eon.svg" className="eon-mobile" alt=""/>
			<p className="invisible-mobile">Invisible<br/> Braces</p>
		</div>

		<p className="new-first">اعرف المزيد</p>
		<img src="images/arrow.svg" className="arrow"/>
	</div>
</div>

{/* Web Second sections */}
		<div id="second">
			<h2 className="header">طريقة عمل التقويم الشفاف</h2>

			<div className="section2_dgrid">
				<div></div>
				<div className="section2-img">
					<img src="images/Capture.PNG"/>
				</div>
				<div className="main-text-grid">
					<div className="text-grid">
						<div className="text">
							يقوم طبيب الاسنان باخذ قياسات الأسنان لتصميم خطة العلاج
						</div>
						<div><img src="images/1.svg"/></div>

					</div>

					<div className="text-grid">
						<div className="text">
							سوف يريك الطبيب خطة العلاج على شكل فيديو ثلاثي الابعاد لترى النتيجة النهائية حتى قبل
							بدءالعلاج
						</div>
						<div><img src="images/2.svg"/></div>

					</div>
					<div className="text-grid">
						<div className="text">
							عند الموافقة على خطة العلاج سوف تستلم التقويم الشفاف الذي سوف يقوم بتحريك اسنانك تدريجيا
						</div>
						<div><img src="images/3.svg"/></div>

					</div>
					<div className="text-grid">
						<div className="text">
							مع الانتهاء من استخدام اخر تقويم سوف تكون وصلت الى ابتسامتك المثالية
						</div>
						<div><img src="images/4.svg"/></div>

					</div>

				</div>
				<div></div>
			</div>
		</div>

{/* <Mobile Second section */}
<div id="third-mobile" >
	<p className="new-third">يقوم التقويم الشفاف بتحريك اسنانك تدريجياً حتى تصل الى الابتسامة المثالية!</p>
	<img  className="img-section2-mobile" src="images/Capture.PNG"/>
	
	<div className="wrapper-mobile">
		<div className="box-mobile">
			<p className="main-mobile">الحـــــالات المتقدمة</p>
			<p className="price-mobile">١٠٠٠</p>
			<p className="textRed-mobile">  دينار كويتي فقط </p><br/>
			<p className="textBlue-mobile">امكانية التقسيط متوفرة</p>		
		</div>
		<div className="box-mobile">
			<p className="main-mobile">الحالات البسيطة والمعتدلة</p>
			<p className="price-mobile">٦٠٠</p>
			<p className="textRed-mobile">دينار كويتي فقط</p><br/>
			<p className="textBlue-mobile">امكانية التقسيط متوفرة</p>  
		</div>
	  </div>

			<p className="thirdP-mobile">العرض ساري فقط لمواعيد الاستشارة المحجوزة</p>
			<p className="thirdP-mobile">ليومي الاثنين ٢٥/١ و ١/٢</p>
	 
	  <p className="thirdFinal-mobile">!لا تفوت الفرصة واحجز موعدك الان</p>
</div>

 {/* Web Third sections */}
<div id="third" >	
	<div className="wrapper">
		<div className="box">
			<p className="main">الحـــــالات المتقدمة</p>
			<p className="price">١٠٠٠</p>
			<p className="textRed">  دينار كويتي فقط </p><br/>
			<p className="textBlue">امكانية التقسيط متوفرة</p>		
		</div>
		<div className="box">
			<p className="main">الحالات البسيطة والمعتدلة</p>
			<p className="price">٦٠٠</p>
			<p className="textRed">دينار كويتي فقط</p><br/>
			<p className="textBlue">امكانية التقسيط متوفرة</p>  
		</div>
		<div className="written">
			<p className="thirdP">العرض ساري فقط لمواعيد الاستشارة المحجوزة</p>
			<p className="thirdP">ليومي الاثنين ٢٥/١ و ١/٢</p>
			<p className="thirdFinal">!لا تفوت الفرصة واحجز موعدك الان</p>
	  </div>
	  </div>

</div>
	
	
{/* Web fourth section */}
{/* here we walked through grids horizontally */}
	<div id="fourth">
		<div style={{paddingTop: '20px'}}>
		<div className="pictures">
			<div></div>
			<div style={{alignItems: 'center'}}>	
				<img src="images/Iron.svg" />
				<p className="explanation">التقويم المعدني</p>
			</div>
			<div></div>
			<div style={{alignItems: 'center'}}>
				<img src="images/transparent.svg" />
				<p className="explanation">التقويم الشفاف</p>
			</div>
			<div></div>
		</div>
		<div className="pictures">
			<div></div>
			<img src="images/check.svg" style={{margin: '0 auto'}} />
			<p className="comparison">علاج فعال</p>
			<img src="images/check.svg" style={{margin: '0 auto'}} />
			<div></div>
		</div>
		<div className="pictures">
			<div></div>
			<img src="images/cross.svg" style={{margin: '0 auto'}} />
			<p className="comparison">شفاف وخفي</p>
			<img src="images/check.svg" style={{margin: '0 auto'}} />
			<div></div>
		</div>
		<div className="pictures">
			<div></div>
			<img src="images/cross.svg" style={{margin: '0 auto'}} />
			<p className="comparison">يمكن ازالته للأكل</p>
			<img src="images/check.svg" style={{margin: '0 auto'}} />
			<div></div>
		</div>
		<div className="pictures">
			<div></div>
			<img src="images/cross.svg" style={{margin: '0 auto'}} />
			<p className="comparison">لطيف على اللثة</p>
			<img src="images/check.svg" style={{margin: '0 auto'}} />
			<div></div>
		</div>	
	</div>
	</div>

	{/* Mobile Third section */}

<div id="fourth-mobile">
	<div className="pictures-mobile">
		<div></div>
		<div >	
			<img src="images/Iron.svg" style={{width: '100%'}} />
			<div className="explanation-mobile" >التقويم المعدني</div>
		</div>
		<div></div>
		<div  >
			<img src="images/transparent.svg" style={{width: '100%'}} />
			<p className="explanation-mobile" >التقويم الشفاف</p>
		</div>
		<div></div>
	</div>
	<div className="pictures-mobile">
		<div></div>
		<img src="images/check.svg" style={{margin: '0 auto', width: '25%'}} />
		<p className="comparison-mobile">علاج فعال</p>
		<img src="images/check.svg" style={{margin: '0 auto', width: '25%'}} />
		<div></div>
	</div>
	<div className="pictures-mobile">
		<div></div>
		<img src="images/cross.svg" style={{margin: '0 auto', width: '25%'}} />
		<p className="comparison-mobile" >شفاف وخفي</p>
		<img src="images/check.svg" style={{margin: '0 auto', width: '25%'}} />
		<div></div>
	</div>
	<div className="pictures-mobile">
		<div></div>
		<img src="images/cross.svg" style={{margin: '0 auto', width: '25%'}} />
		<p className="comparison-mobile">يمكن ازالته للأكل</p>
		<img src="images/check.svg" style={{margin: '0 auto', width: '25%'}} />
		<div></div>
	</div>
	<div className="pictures-mobile">
		<div></div>
		<img src="images/cross.svg" style={{margin: '0 auto', width: '25%'}} />
		<p className="comparison-mobile">لطيف على اللثة</p>
		<img src="images/check.svg" style={{margin: '0 auto', width: '25%'}} />
		<div></div>
	</div>	
</div>

<div id="fifth">
	<h1 className="header-fifth" >الاستشارة تشمل</h1>
	<div className="wrapper2">
		<div className="box2 c">صور الأشعة</div>
		<div className="box2 d">طبعة الأسنان لتصميم خطة العلاج</div>
		<div className="box2 a">فيديو ثلاثي الابعاد لخطة علاج يعرض حركة الاسنان والنتيجة النهائية لعلاجك</div>
	
</div><p className="price2">قيمة الاستشارة ٣٠ دينار كويتي والتي سوف يتم خصمها من سعر العلاج الإجمالي حين اقتناؤه</p>
</div>

<footer className="container">
	<div id="footer">
		<div className="footerButton">
	<center><button className="secondButton">!احجز موعد استشارة الان</button></center>		
		</div>	
	</div>
</footer>
</div>
</div>
    </div>
  );
  }
 
}

export default App;
