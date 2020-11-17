                        {
                            [...'1234567'].map(value=>(
                                <div class="col-md-2 mb-3">
                                    <div className="card item-card">
                                        <h5 className="bold-550">CashBack Offers</h5>
                                        <p>Coupons that gives a user a percentage of price used in product</p>
                                        <Link to="/dashboard/users" className="view-more-link text-primary text-right"> 
                                            <div className="icon-image-container-no-margin text-right">
                                                <img src={ArrowRightPNG}/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }