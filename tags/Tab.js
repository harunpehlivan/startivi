 function tabview_aux(TabViewId, id)
      {
        var TabView = document.getElementById(TabViewId);
        // ----- Tabs -----
        var Tabs = TabView.firstChild;
        while (Tabs.className != &quot;Tabs&quot; ) Tabs = Tabs.nextSibling;
        var Tab = Tabs.firstChild;
        var i = 0;
        do
        {
          if (Tab.tagName == &quot;A&quot;)
          {
            i++;
            Tab.href = &quot;javascript:tabview_switch(&#39;&quot;+TabViewId+&quot;&#39;, &quot;+i+&quot;);&quot;;
                                                       Tab.className = (i == id) ? &quot;Active&quot; : &quot;&quot;;
            Tab.blur();
          }
        }
        while (Tab = Tab.nextSibling);
        // ----- Pages -----
        var Pages = TabView.firstChild;
        while (Pages.className != &#39;Pages&#39;) Pages = Pages.nextSibling;
               var Page = Pages.firstChild;
               var i = 0;
               do
               {
               if (Page.className == &#39;Page&#39;)
               {
               i++;
               if (Pages.offsetHeight) Page.style.height = (Pages.offsetHeight-2)+&quot;px&quot;;
        Page.style.overflow = &quot;auto&quot;;
        Page.style.display = (i == id) ? &#39;block&#39; : &#39;none&#39;;
      }
      }
        while (Page = Page.nextSibling);
      }
        // ----- Functions -------------------------------------------------------------
        function tabview_switch(TabViewId, id) { tabview_aux(TabViewId, id); }
        function tabview_initialize(TabViewId) { tabview_aux(TabViewId, 1); }