
export default function orderform({services,host}) {
    const registerUser = async event => {
        event.preventDefault()
        const res = await fetch('https://raziantibody.com/v1/orderlist', {
            body: JSON.stringify({
                 
                        name:event.target.name.value,
                        family:event.target.family.value,
                        call:event.target.call.value,
                        email:event.target.email.value,
                        website:event.target.website.value,
                        url:event.target.url.value,
                        url:event.target.code.value,

        
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
          console.log(res);

          const result = await res.json()
          event.target.reset();
          alert('سفارش شما ثبت گردید در اولین فرصت با شما تماس خواهیم گرفت');
          return {
            props: { result },
          };
     
      }
    return (
        <>
    <form onSubmit={registerUser}> 
        <div class="row text-right" dir="rtl">
            <div class="col-sm-6 col-xs-12">
                <div class="form-group text-right">
                    <label>نام</label>
                    <input type="text" required name="name"  class="form-control"  placeholder="نام خود را وارد نمایید"></input>
                </div>
            </div>
            <div class="col-sm-6 col-xs-12">
                <div class="form-group text-right">
                    <label>نام خانوادگی</label>
                    <input type="text" required name="family" class="form-control"  placeholder="نام خانوادگی"></input>
                </div>
            </div>
            <div class="col-sm-6 col-xs-12">
                <div class="form-group text-right">
                    <label>شماره تماس</label>
                    <input required  name="call" class="form-control "  placeholder="شماره تماس"></input>
                </div>
            </div>
          
            
         <div class="col-sm-6 col-xs-12">
                <div class="form-group text-right">
                    <label>ایمیل</label>
                    <input required  name="email" dir="ltr" type="email" class="form-control" placeholder="ایمیل خود را وارد نمایید"></input>
                </div>
            </div>
            <div class="col-sm-6 col-xs-12">
                <div class="form-group text-right">
                    <label>سایت سفارش دهنده</label>
                    <select required  dir="ltr"  name="website" class="form-control">
                    {services.map((datafetch, index) => (
                        <option value={datafetch.name}>{ datafetch.name }</option>
          
                     ))}


                    </select>
                </div>
            </div>
            <div class="col-sm-6 col-xs-12">
                <div class="form-group text-right">
                    <label>کد محصول را وارد نمایید</label>
                    <input  required  dir="ltr" name="code" class="form-control text-left"  placeholder="کد محصول"></input>
                </div>
            </div>
            <div class="col-sm-12 col-xs-12">
                <div class="form-group text-right">
                    <label>URL صفحه را وارد نمایید</label>
                    <input required dir="ltr"  name="url" class="form-control  text-left"  placeholder="URL"></input>
                </div>
            </div>
            </div>
    <button type="submit" class="btn btn-primary mt-4">ارسال سفارش</button>
    </form>
        </>
        )
    }