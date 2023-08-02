import React from 'react'
import '../../../App.css'
import GoToTop from '../../../GoToTop'

export default function Datadog() {
    return (
        <div className='container'>
            <GoToTop />
            <div>
                <h1 className='qualifications'>Datadog Azure DR failover</h1>
                <div className='smallcard'>
                    <div className='leftdiv'>

                        <p>
                            I like self hosting my website. It gives me a set of challenges to overcome. One of these challenges
                            involves remaining a solid uptime on a residential connection. Ever since Optimum has merged with Suddenlink, my uptime has not been
                            a solid 100%. I occasionally deal with outages, however I still want my website to be available when my server is not.
                        </p>
                        <br />
                        <p>
                            An Azure virtual private server is hosted as my disaster recovery. Using Github Actions, the server is always deployed with the
                            latest version of my website, ready to take over when required. View my <a href="https://github.com/lperniciaro/Personal-Website/actions">Personal Website
                                Github Actions</a>
                        </p>

                    </div>
                    <div className='rightdiv'>
                        <h1 className='the_specs'>Datadog Webhook</h1>
                        <p>
                            Datadog monitors my self hosted machine for input. If my server fails to send information to datadog, it triggers a webhook,
                            which triggers a custom script hosted on my DR. This script is integrated with my DNS provider (Cloudflare) to update
                            the A record for my domain (lucianp.com), updating it from self-hosted IP, to Azure DR IP. You can view my
                            webhook script <a href="https://github.com/lperniciaro/DatadogScripts/blob/main/datadog_webhook.py">on Github</a>
                        </p>
                    </div>

                </div>

            </div>

            <h1 className='qualifications'>The Result?</h1>
            <div className='smallcard'>
                <p>
                    My self-hosted website disaster recovery works as expected. When my server is unavailable, the webhook updates my DNS
                    providers DNS record, and my domain is succesfully migrated to my Azure host instantly.
                </p>
                <br />
                <p>
                    You may be asking? Why do all of this? Why not just host on Azure and have their own redundancy built in?
                </p>
                <br />
                <p>
                    Because I want to. I want the website to be on my own server. It's just unreliable. To make it reliable I get to
                    practice my DevOps technique :). *update*: I'm moving from Late July to Early August 2023, so my server will
                    be down until I can set up my server at my new place.
                </p>
                <div class="polaroid3">
                    <img src="Pics/datadogmonitor.png" alt="Datadog Monitor" className="imgs" />
                    <div class="container">
                        <p>Datadog Monitors</p>
                    </div>
                </div>

                <div class="polaroid3">
                    <img src="Pics/datadogwebhook.png" alt="Webhook" className="imgs" />
                    <div class="container">
                        <p>Datadog Webhook</p>
                    </div>
                </div>

                <div class="polaroid3">
                    <img src="Pics/webhookintegration.png" alt="Datadog Integration" className="imgs" />
                    <div class="container">
                        <p>Webhook Integration</p>
                    </div>
                </div>

            </div>


        </div>


    )
}