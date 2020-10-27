// ==UserScript==
// @name         Fix Versions for Bitbucket Pull Requests
// @namespace    https://github.com/vadimbelyaev/bitbucket-fixversions 
// @version      0.1
// @downloadURL  https://github.com/vadimbelyaev/bitbucket-fixversions/raw/main/bitbucket-fixversions.user.js 
// @supportURL   https://github.com/vadimbelyaev/bitbucket-fixversions/issues
// @description  Displays fix versions of Jira issues right in the pull request title. The pull request title must contain the Jira issue number(s) and the Bitbucket instance must have the integration with Jira enabled.
// @author       Vadim Belyaev <vadimbelyaev@gmail.com>
// @match        https://*/projects/*/repos/*/pull-requests/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    AJS.$(document).ready(function() {
        var bbprfixversion_projectKey = AJS.$("#content").attr("data-projectkey")
        var bbprfixversion_issueLinks = AJS.$("#pull-request-header h2 .pr-title-jira-issues-trigger");
        bbprfixversion_issueLinks.each(function() {
            var bbprfixversion_link = AJS.$(this)
            var bbprfixversion_issueKey = bbprfixversion_link.attr("data-issue-keys");
            console.log(bbprfixversion_issueKey);
            AJS.$.ajax({
                url: "/rest/jira-integration/latest/issues?issueKey=" + bbprfixversion_issueKey + "&entityKey=" + bbprfixversion_projectKey + "&fields=fixVersions,-comment&minimum=10",
                success: function( result ) {
                    var bbprfixversion_fixVersions = result[0].fields.fixVersions.map(fv => fv.name).join(", ");
                    bbprfixversion_link.after('<sup style="font-size: x-small" title="Fix Version">' + bbprfixversion_fixVersions + '</sup>');
                }
            });
        });
    });
})();

